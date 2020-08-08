<?php

namespace App\Http\Controllers\Category;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NavbarCategoryController extends Controller
{
    public function index()
    {
        return response([
            'data' => Category::withCount(['posts'])
                ->get()
                ->sortByDesc('posts_count')
                ->except(['id'])
                ->take(10)
        ], 200);
    }
}
