const mix = require('laravel-mix');

const src = './src';
const dist = './public';

mix.js(`${src}/scripts/app.js`, `${dist}/assets/js`)
  .sass(`${src}/styles/styles.scss`, `${dist}/assets/css`)
  .options({
      processCssUrls: false
  })
  .sourceMaps(false)
  .browserSync({
    files: `${dist}/**/*`,
    server: dist,
    proxy: false
  });
