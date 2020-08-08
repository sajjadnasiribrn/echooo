<?php

namespace App\Http\Controllers\Post;

use App\Draft;
use App\Http\Controllers\Controller;
use App\Image;
use Facades\App\Services\ImageService;
use App\Post;
use Illuminate\Http\Request;

class UploadPostImageController extends Controller
{
    public function __invoke(Request $request,$draftLink)
    {
        $request->validate([
            'file' => ['required', 'image', 'max:3000']
        ]);

        $image_name=ImageService::imageResizer(
            $request->file('file'),
            Post::getPublicDirectory(),
            600,
            85);
        $path=Post::getImageDirectory().$image_name;
        if($draftLink!='none' && $image_name){
           $currentDraft=Draft::firstWhere('link', "$draftLink");
            $draftImageData=[
                'path'=>"$path",
            ];
            $image=Image::create($draftImageData);
            $currentDraft->images()->attach($image->id);
        }
         return response([
             'data' => $path
         ]);
    }


}
