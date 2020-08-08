<?php

namespace App\Http\Controllers;

use App\Post;


class ShortLinkPostController extends Controller
{

    public function __invoke(Post $post)
    {
        return redirect("/post/{$post->slug}");
    }
}
