<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class ShowPostController extends Controller
{

    public function __invoke(Post $post)
    {
        $related_posts = Post::with('user')
            ->where('id', '!=', $post->id)
            ->where('user_id','!=',$post->user->id)
            ->whereHas('categories', function ($query) use ($post) {
                $query->whereIn('categories.id', $post->categories->pluck('id'));
            })->inRandomOrder()
            ->take(3)
            ->get();

        Redis::zincrby('trending_posts', 1, json_encode([
            'title' => $post->title,
            'slug' => $post->slug,
            'user_name' => $post->user->name,
            'user_profile_src' => $post->user->profile_src,
            'user_username'=>$post->user->username,
        ]));

        Redis::zincrby('trending_writers', 1, json_encode([
            'name' => $post->user->name,
            'username' => $post->user->username,
        ]));

        $post->load(['user', 'categories', 'parentComments'])
            ->loadCount(['comments', 'likes'])
            ->append('is_liked');

        $post->user->append('is_follows');

        return response([
            'post' => $post,
            'related_posts' => $related_posts
        ], 200);
    }
}
