<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllUserDraftsController extends Controller
{
    public function __invoke(Request $request)
    {
        $data=$request->user()->drafts->sortByDesc('updated_at')->except(['id'])
            ->map(function ($draft) {
                return collect($draft)->merge([
                    'updated_at' => verta($draft->updated_at)->formatDifference()
                ]);
            });

        return response([
            'data' => $data,
            'drafts_count' => $request->user()->drafts->count(),
            'posts_count' => $request->user()->posts->count()
        ], 200);
    }
}
