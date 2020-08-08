<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $guarded=[];

    public function drafts(){
        $this->morphedByMany(Draft::class,'imageables');
    }
    public function posts(){
        $this->morphedByMany(Post::class,'imageables');
    }
}
