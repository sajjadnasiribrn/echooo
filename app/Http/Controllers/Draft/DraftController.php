<?php

namespace App\Http\Controllers\Draft;

use App\Draft;
use App\Http\Controllers\Controller;
use App\Http\Requests\DraftRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DraftController extends Controller
{
    public function store(DraftRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;
        $data['link'] =$request->user()->username.Str::random(20);
        $draft = Draft::create($data);

        return response([
            'link' => $draft->link,
            'id'=>$draft->id
        ], 200);
    }

    public function show(Draft $draft)
    {
        $this->authorize('show', $draft);

        return $draft;
    }

    public function update(DraftRequest $request, Draft $draft)
    {
        $data = $request->validated();

        $draft->update($data);

        return response(['data'=>$draft], 200);
    }

    public function destroy(Draft $draft)
    {
        $this->authorize('show', $draft);
        $images=$draft->images()->get();
        foreach ($images as $image){
            $path=public_path(Str::afterLast('*'.$image->path,'*/'));
            if(file_exists($path)) {
                unlink($path);
            }
        }
        $draft->images()->detach();
        DB::table('images')
            ->whereIn('id',collect($images)->pluck('id'))->delete();
        $draft->delete();

        return response([
            'data' => 'ok'
        ], 200);
    }
}
