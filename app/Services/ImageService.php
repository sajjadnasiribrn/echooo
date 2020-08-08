<?php


namespace App\Services;


use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImageService
{
    /**
     * @param $image
     * @param string $image_name
     * @param $image_dir
     * @return string
     */
    public function uploadImageBase64($image, string $image_name, $image_dir): string
    {
        $file_name = Str::random(5).$this->getFileNameBase64($image_name);
        $path = $image_dir . $file_name;

        Image::make($image)
            ->fit(500)
            ->save($path);

        return $file_name . '?' . Str::random(16);
    }


    public function uploadPostImageBase64($image, string $image_name, $image_dir, $limit): string
    {
        $image_name = Str::random(10) . '-' . $image_name;
        $path = $image_dir . $image_name;

        $image=Image::make($image);
        $original_width = $image->width();
        $original_height = $image->height();
        if ($original_width > $limit) {
            $original_ratio = $original_height / $original_width;
            $new_width = $limit;
            $new_height = $original_ratio * $limit;
            $image->resize($new_width, $new_height, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
            $image->save(public_path($path));

        return $image_name;
    }
    /**
     * @param string $image_name
     * @return string
     */
    public function getFileNameBase64(string $image_name): string
    {
        return (optional(request()->user())->username ?? Str::random(10)) . '.' . Str::afterLast($image_name, '.');
    }

    /**
     * @param UploadedFile $imageFile
     * @param $file_dir
     * @param null $file_name
     * @return string
     */
    public function uploadImageFile(UploadedFile $imageFile, $file_dir, $filename = null): string
    {
        $image_name = $file_name ?? $this->getFileName($imageFile);
        $image_dir = $file_dir;
//TODO behineh sazi tasavir pish az zakhirehsazi

        $imageFile->move($image_dir, $image_name);
        return $image_name;
    }

    /**
     * @param UploadedFile $imageFile
     * @param $file_dir
     * @param int $limit
     * @param int $quality
     * @return boolean
     */
    public function imageResizer(UploadedFile $imageFile,$file_dir, int $limit, int $quality)
    {
        $image_type = $imageFile->getClientOriginalExtension();
        if($image_type!='jpg'){
            $image = Image::make($imageFile)->encode('jpg', 90);
        }else{
            $image = Image::make($imageFile);
        }
        $original_width = $image->width();
        $original_height = $image->height();
        if ($original_width > $limit) {
            $original_ratio = $original_height / $original_width;
            $new_width = $limit;
            $new_height = $original_ratio * $limit;
            $image->resize($new_width, $new_height, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
        if($image_type!='jpg') {
            $image_name =Str::random(15).'.'.'jpg' ;
        }else{
            $image_name = $file_name ?? $this->getFileName($imageFile);
        }
        $imagePath=$file_dir.$image_name;
        $image->save($imagePath,$quality);
        if (file_exists($imagePath))
            return $image_name;
        else
            return false;
    }

    public function getFileName($imageFile)
    {
        return Str::random(15) . '.' . $imageFile->getClientOriginalExtension();
    }
}
