<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class TrendingWriterController extends Controller
{
    public function index()
    {
        $writers = collect(Redis::zrevrange('trending_writers', 0, 6))->map(function ($writer) {
            return json_decode($writer);
        });

        return response([
            'writers' => $writers,
        ], 200);
    }
}
