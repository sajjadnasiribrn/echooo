<?php

namespace App\Http\Requests;

use App\Services\Censor;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class CommentRequest extends FormRequest
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
            'content' => ['required'],
            'type'=>['required','boolean']
        ];
    }

    protected function prepareForValidation()
    {
        $content = $this->only('content');
        $type=$this->only('type');

        if(is_bool($type['type'])){
            $type=$type['type'];
        }elseif ( $type['type']==1 ){
            $type=false;
        }elseif ($type['type']==2){
            $type=true;
        }

        if(strip_tags($content['content']) == '') {
            $newcontent='';
        }else{
            $newcontent=$content['content'];
        }

        $this->merge([
            'content' => $newcontent,
            'type'=>$type,
        ]);
    }

    public function passedValidation()
    {
        $content = $this->only('content');
        $censor = app(Censor::class);
        $badWords=$censor->badWords;
            $newcontent=$censor->censor($content['content'],$badWords,'*');


        return $this->merge([
            'content'=>$newcontent
        ]);
    }
}
