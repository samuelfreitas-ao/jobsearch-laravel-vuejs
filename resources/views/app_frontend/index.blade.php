<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{env('APP_NAME')}}</title>
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('fontawesome.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('assets/vendor/bootstrap-icons/css/bootstrap-icons.css') }}">
</head>

<body>
    <div id="app">
        <app></app>
    </div>
</body>
<script src="{{ asset('assets/js/app.js') }}"></script>

</html>
