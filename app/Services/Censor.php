<?php


namespace App\Services;


class Censor
{
    public $badWords=[
        ' کیر ',
        'کیرم ',
        'کیر ',
        ' کیری ',
        'کیررر',
        ' جنده ',
        ' کسکش ',
        ' کس کش ',
        ' کس شعر ',
        'کسشعر',
        ' کس شعری ',
        ' کس و شعر ',
        'کس کش ',
        'کس کش خر ',
        ' کونی ',
        ' کونی',
        ' هرزه ',
        'هرزه ',
    ];

public function censor($string ,$badWords, $character = '*') {

    $newBadWords = [];
    foreach ($badWords as $word) {
        $newBadWords[$word] = str_repeat($character, mb_strlen($word,'utf-8'));
    }
    return strtr($string, $newBadWords);
}
}
