<?php

namespace App\Http\Controllers\Post;

use App\Category;
use App\Draft;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Requests\UpdatePostDataRequest;
use App\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {
        $data = $request->only([
            'title', 'content', 'description',
            'user_id', 'image','min_read'
        ]);

        $draftId=$request->only('draftId');

        $post = Post::create($data);

        $this->createPostCategories($request, $post);

        $affected = DB::table('imageables')
            ->where([
                ['imageables_type','=','App\Draft'],
                ['imageables_id','=',$draftId['draftId']]
            ])
            ->update([
                'imageables_id' => $post->id,
                'imageables_type'=>'App\Post'
            ]);
        Draft::find($draftId['draftId'])->delete();

        return response(['data' => $post], 200);
    }
    public function show(Post $post)
    {
        $this->authorize('view', $post);

        return $post->append('categories_title');
    }

    public function edit(UpdatePostDataRequest $request, Post $post)
    {
        $post->update(
            $request->validated()
        );

        return $post;
    }

    public function update(PostRequest $request, Post $post)
    {
        $data = $request->only([
            'title', 'content', 'description',
            'user_id', 'image', 'min_read'
        ]);
        $data['slug']='';

        $image_name= $request->only('image_name');

        if (! isset($image_name['image_name'])) {
            unset($data['image']);
        }

        $post->update($data);

        $this->createPostCategories($request, $post);

        return response(['data' => $post], 200);
    }

    public function destroy(Post $post)
    {
        $this->authorize('view', $post);
        $images=$post->images()->get();

        if (file_exists(public_path($post->image))) {
            unlink(public_path($post->image));
        }

        foreach ($images as $image){
            $path=public_path(Str::afterLast('*'.$image->path,'*/'));
            if(file_exists($path)) {
                unlink($path);
            }
        }
        $post->images()->detach();
        DB::table('images')
            ->whereIn('id',collect($images)->pluck('id'))->delete();
        $post->delete();

        return response([
            'data' => 'ok'
        ], 200);
    }

    /**
     * @param PostRequest $request
     * @param Post $post
     */
    protected function createPostCategories(PostRequest $request, Post $post): void
    {
        $selectedCategories = Category::whereIn('title', $request->categories)->get();
        $shouldCreateCategories = collect($request->categories)->diff($selectedCategories->pluck('title'));

        $createdCategories = [];
        foreach ($shouldCreateCategories->toArray() as $categoryTitle) {
            $createdCategories[] = Category::create([
                'title' => $categoryTitle
            ]);
        }
        $post->categories()->sync(
            collect($createdCategories)->pluck('id')->concat($selectedCategories->pluck('id'))
        );
    }
}
