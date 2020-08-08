<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class UserFriendPostController extends Controller
{
    public function index(Request $request)
    {
        $following_ids=$request->user()->follows->pluck('id');
        $posts=Post::with('user')
            ->whereIn('user_id',$following_ids)
            ->latest()
            ->withCount('likes')
            ->simplePaginate(7);

        return response([
            'posts'=>$posts,
        ],200);
    }
}
