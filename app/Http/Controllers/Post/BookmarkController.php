<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class BookmarkController extends Controller
{
    public function store(Request $request, Post $post)
    {
        $post->bookmarks()->sync(
            $request->user()->id,
            false
        );

        Redis::zincrby('trending_posts', 2, json_encode([
            'title' => $post->title,
            'slug' => $post->slug,
            'user_name' => $post->user->name,
            'user_profile_src' => $post->user->profile_src,
            'user_username'=>$post->user->username,
        ]));

        Redis::zincrby('trending_writers', 2, json_encode([
            'name' => $post->user->name,
            'username' => $post->user->username,
        ]));

        return response([
            'data' => 'ok'
        ], 200);
    }

    public function destroy(Request $request, Post $post)
    {
        $post->bookmarks()->detach(
            $request->user()->id
        );

        Redis::zincrby('trending_posts', -2, json_encode([
            'title' => $post->title,
            'slug' => $post->slug,
            'user_name' => $post->user->name,
            'user_profile_src' => $post->user->profile_src,
            'user_username'=>$post->user->username,
        ]));

        Redis::zincrby('trending_writers', -2, json_encode([
            'name' => $post->user->name,
            'username' => $post->user->username,
        ]));

        return response([
            'data' => 'ok'
        ], 200);
    }
}
