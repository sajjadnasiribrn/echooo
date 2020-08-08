<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>وبلاگ اکو</title>

        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('/css/app.css')}}">

        <script>
            window.csrf_token = '{{ csrf_token() }}'
        </script>

        @auth
            <script>
                window.user = {
                    id: '{{ auth('sanctum')->user()->id }}',
                    name: '{{ auth('sanctum')->user()->name }}',
                    username: '{{ auth('sanctum')->user()->username }}',
                    profile_src: '{{ auth('sanctum')->user()->profile_src }}',
                    isVerified: '{{auth('sanctum')->user()->email_verified_at==null
                    ? 1:2 }}',
                    roles: @json(auth('sanctum')->user()->roles->pluck('name'))
                }
            </script>
        @endauth
    </head>
    <body>
        <div id="app">
            <v-app>
            <router-view :key="$route.fullPath"></router-view>
            </v-app>
        </div>
        <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>
