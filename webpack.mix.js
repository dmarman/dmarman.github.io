let mix = require('laravel-mix');

mix.postCss('src/main.css', './bin/main.css', [
  require('tailwindcss'),
]).js('src/main.js', './bin/main.js');