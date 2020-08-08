@component('mail::message')
{{-- Greeting --}}
@if (! empty($greeting))
# {{ $greeting }}
@else
@if ($level === 'error')
# @lang('Whoops!')
@else
# @lang('سلام')
@endif
@endif

{{-- Intro Lines --}}
@foreach ($introLines as $line)
{{ $line }}

@endforeach

{{-- Action Button --}}
@isset($actionText)
<?php
    switch ($level) {
        case 'success':
        case 'error':
            $color = $level;
            break;
        default:
            $color = 'primary';
    }
?>
@component('mail::button', ['url' => $actionUrl, 'color' => $color])
{{ $actionText }}
@endcomponent
@endisset

{{-- Outro Lines --}}
@foreach ($outroLines as $line)
{{ $line }}

@endforeach

{{-- Salutation --}}
@if (! empty($salutation))
{{ $salutation }}
@else
@lang('با تشکر'),<br>
{{ config('app.name') }}
@endif

{{-- Subcopy --}}
@isset($actionText)
@slot('subcopy')
    @lang(
        "اگر مشکلی در کلیک بر روی دکمه \":actionText\" دارید روی این لینک کلیک کنید \n".
        ' : [:displayableActionUrl](:actionURL)',
        [
            'actionText' => $actionText,
            'actionURL' => $actionUrl,
            'displayableActionUrl' => $displayableActionUrl,
        ]
    ) <span class="break-all">[{{ $displayableActionUrl }}]({{ $actionUrl }})</span>
@endslot
@endisset
@endcomponent
