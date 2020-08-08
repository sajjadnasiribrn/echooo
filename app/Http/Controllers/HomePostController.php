<?php

namespace App\Http\Controllers;

use App\Post;

class HomePostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'categories'])
            ->withCount('likes')
            //->orderByDesc('created_at')
                ->latest()
            ->simplePaginate(5);

        return response([
            'posts' => $posts
        ], 200);
    }
}
