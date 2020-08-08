<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response([
            'items' => Post::with('user')
                ->withCount(['comments', 'likes'])
                ->sortFromRequest()
                ->searchInFields()
                ->paginate($request->per_page ?? 10),
            'headers' => Post::getHeaderFields(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);

        foreach ($request->items as $id) {
            $post=Post::find($id);

            $images = $post->images()->get();

            if (file_exists(public_path($post->image))) {
                unlink(public_path($post->image));
            }

            foreach ($images as $image) {
                $path = public_path(Str::afterLast('*' . $image->path, '*/'));
                if (file_exists($path)) {
                    unlink($path);
                }
            }
            $post->images()->detach();
            DB::table('images')
                ->whereIn('id', collect($images)->pluck('id'))->delete();
        }

        Post::destroy($request->items);

        return response([
            'data' => 'ok'
        ], 200);
    }
}
