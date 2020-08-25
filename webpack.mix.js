let mix = require('laravel-mix');

mix.js('src/main.js', './main.js').postCss('src/main.css', './main.css', [
  require('tailwindcss'),
]);