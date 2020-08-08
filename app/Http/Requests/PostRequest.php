<?php

namespace App\Http\Requests;

use App\Post;
use App\Services\ImageService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class PostRequest extends FormRequest
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
               'title' => ['required','min:1'],
               'content' => ['required','min:10'],
               'description' => ['nullable'],
               'id'=>['nullable'],
               'image' => ['nullable'],
               'image_name' => ['nullable','string'],
               'categories' => ['required', 'array'],
               'categories.*' => ['required'],
        ];
    }
    public function passedValidation()
    {
        $data = $this->all();
        $imageService = app(ImageService::class);

        if($data['image']!=null) {
            $image = isset($data['image_name']) ? $imageService->uploadPostImageBase64(
                $data['image'],
                $data['image_name'],
                Post::getImageDirectory(),
                400
             ) : '';
        }else{
            $image='none';
        }

        $description = Str::words($data['description'], 50, '...')
            ?? Str::words(strip_tags($data['content']), 50, '...');


        $min_read = ceil(str_word_count(strip_tags($data['content'])) / 185);

        return $this->merge([
            'user_id' => $this->user()->id,
            'description' => $description,
            'min_read' => $min_read,
            'image' => $image,
        ]);
    }
}
