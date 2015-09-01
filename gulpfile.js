var elixir = require('laravel-elixir');

//Paths to libraries
var paths = {
    'bootstrap': 'node_modules/bootstrap-sass/assets/'
}

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'public/css', {includePaths: [paths.bootstrap + 'stylesheets/']});
});
