<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class SearchPostController extends Controller
{
    public function index(Request $request)
    {
        //$q="%{$request->q}%";
        //$posts = Post::search($q)
        //    ->Paginate(10);

        $posts = Post::where('title', 'LIKE', "%{$request->q}%")
   ->orWhere('content', 'LIKE', "%{$request->q}%")
   ->with(['user'])
   ->withCount('likes')
        ->simplepaginate(10);


        return response([
            'posts' => $posts
        ]);
    }
}

//where('title', 'LIKE', "%{$request->q}%")
//    ->orWhere('content', 'LIKE', "%{$request->q}%")
//    ->with(['user'])
//    ->withCount('likes')
