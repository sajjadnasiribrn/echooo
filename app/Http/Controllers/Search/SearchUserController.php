<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class SearchUserController extends Controller
{
    public function index(Request $request)
    {
        //$users = User::search("$request->q")
         //   ->Paginate(10);

               $users = User::where('name', 'LIKE', "%{$request->q}%")
           ->orWhere('bio', 'LIKE', "%{$request->q}%")
           ->simplePaginate(10);

       $users->getCollection()
           ->transform(function ($user) {
               return $user->append('is_follows');
           });


        return response([
            'users' => $users
        ], 200);
    }
}


//$users = User::where('name', 'LIKE', "%{$request->q}%")
//    ->orWhere('bio', 'LIKE', "%{$request->q}%")
//    ->simplePaginate(10);
//
//$users->getCollection()
//    ->transform(function ($user) {
//        return $user->append('is_follows');
//    });
