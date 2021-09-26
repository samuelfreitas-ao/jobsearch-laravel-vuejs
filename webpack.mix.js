const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/assets/js')
    .vue()

.postCss('resources/css/app.css', 'public/assets/css/app.css', [
    require("tailwindcss"),
])

// .sass('resources/sass/fontawesome.scss', 'public/css/fontawesome.css')

//Bootstrap icon
.styles("node_modules/bootstrap-icons/font/bootstrap-icons.css", "public/assets/vendor/bootstrap-icons/css/bootstrap-icons.css")
    .copyDirectory("node_modules/bootstrap-icons/font/fonts", "public/assets/vendor/bootstrap-icons/css/fonts")

if (mix.inProduction()) {
    mix.version();
}
