const mix = require('laravel-mix');

const src = './src';
const dist = './public';

mix.js(`${src}/scripts/app.js`, `${dist}/assets/js`)
  .sass(`${src}/styles/main.scss`, `${dist}/assets/css`)
  .sourceMaps(false)
  .browserSync({
    files: `${dist}/**/*`,
    server: dist,
    proxy: false
  });
