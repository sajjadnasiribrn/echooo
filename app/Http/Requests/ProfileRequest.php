<?php

namespace App\Http\Requests;

use App\Services\TranselateNumbers;
use GrahamCampbell\SecurityCore\Security;
use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'name'=>['required'],
            'email'=>['required','email',"unique:users,email,{$this->id}"],
            'password'=>['nullable'],
            'profile'=>['nullable'],
            'bio'=>['nullable','max:100'],
            'username'=>['required',"unique:users,username,{$this->id}",'regex:/^[a-zA-Z0-9]([\.\w]*){3,15}$/'],
            'email_on_follow'=>['required'],
            'email_on_like'=>['required'],
            'email_on_reply'=>['required']
        ];
    }

    protected function prepareForValidation()
    {
        $data = $this->only(
             'email',
                 'password',
                 'username'
        );

        $en = app(TranselateNumbers::class);
        $data['email']= $en->english_numbers($data['email']);
        $data['username']= $en->english_numbers($data['username']);

        if(!empty($data['password'])) {
            $data['password'] = $en->english_numbers($data['password']);
            $this->merge([
                'username'=>$data['username'],
                'email'=>$data['email'],
                'password'=>$data['password']
            ]);
        }else{
            unset($data['password']);
            $this->merge([
                'username'=>$data['username'],
                'email'=>$data['email']
            ]);
        }
    }
}
