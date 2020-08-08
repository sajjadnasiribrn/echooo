<?php

namespace App\Http\Requests\Admin;

use App\Services\TranselateNumbers;
use Illuminate\Foundation\Http\FormRequest;

class UserAdminRequest extends FormRequest
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
        if ($this->getMethod() === 'patch' || $this->getMethod() === 'PATCH') {
            return [
                'name'=>['required'],
                'email'=>['required','email',"unique:users,email,$this->id"],
                'password'=>['nullable'],
                'username'=>['required',"unique:users,username,$this->id",'regex:/^[a-zA-Z0-9]([\.\w]*){3,15}$/'],

            ];
        }
        return [
            'name'=>['required'],
            'email'=>['required','email',"unique:users,email"],
            'password'=>['required'],
            'username'=>['required',"unique:users,username",'regex:/^[a-zA-Z0-9]([\.\w]*){3,15}$/'],
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

        if(filled($data['password'])) {
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
