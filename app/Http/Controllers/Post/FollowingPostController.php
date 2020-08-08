<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class FollowingPostController extends Controller
{
    public function index(Request $request)
    {
        $following_ids=$request->user()->follows->pluck('id');
        $posts=Post::with('user')
            ->whereIn('user_id',$following_ids)
            ->latest()
            ->take(5)
            ->get();
        return response([
            'posts'=>$posts
        ],200);
    }
}
