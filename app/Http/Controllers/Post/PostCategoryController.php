<?php

namespace App\Http\Controllers\Post;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    public function index(Category $category)
    {
        // Post
//        $posts = Post::whereHas('categories', function ($query) use ($category) {
//            $query->where('slug', $category->slug);
//        })->simplePaginate();
        // Category
        $posts = $category->posts()
            ->with(['user', 'categories'])
            ->withCount('likes')
            ->simplePaginate(4);

        return response([
            'posts' => $posts,
            'category' => $category->loadCount('posts')
        ], 200);
    }
}
