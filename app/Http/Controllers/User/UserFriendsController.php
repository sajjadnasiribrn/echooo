<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserFriendsController extends Controller
{
    public function followers(User $user)
    {
        $users=$user->followers()->simplePaginate(10);

        $users->getCollection()
            ->transform(function ($user) {
                return $user->append('is_follows');
            });
        return response([
            'followers'=>$users
        ],200);
    }

    public function following(User $user)
    {
        $users=$user->follows()->simplePaginate(10);

        $users->getCollection()
            ->transform(function ($user) {
                return $user->append('is_follows');
            });

        return response([
            'following'=>$users
        ],200);
    }
}
