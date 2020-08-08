<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use Facades\App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UpdateProfileController extends Controller
{
    public function uploadAvatar(Request $request,$oldProfile)
    {
        if ($request->file) {

            if ($oldProfile!='none') {
                $old_profile = Str::before($oldProfile, '?');
                $old_path = public_path('profiles/') . $old_profile;
                unlink("$old_path");
            }

            $data['profile'] = ImageService::uploadImageBase64(
                $request->file,
                $request->file('file')->getClientOriginalName(),
                public_path('profiles/')
            );
            $request->user()->update(['profile'=>$data['profile']]);
        }
        return response([
            'url' => $data['profile'],
        ],200);
    }

    public function update(ProfileRequest $request)
    {

        $data = $request->only([
            'name', 'email', 'password', 'bio', 'username',
            'email_on_follow', 'email_on_like', 'email_on_reply'
        ]);
        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($request->password);
        }


        $request->user()->update($data);

        return $request->user();
    }
}
