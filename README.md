# Laravel Mix Styleline

This extension provides instant Stylelint support to your Mix (v6.0.11 and up) builds.

## Usage

First, install the extension.

```
npm install @jorenrothman/laravel-mix-stylelint --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix')

require('laravel-mix-stylelint')

mix
  .sass('resources/assets/scss/app.scss', 'public/css')
  .stylelint({
    files: '**/*.scss',
    //...
  })
```

You can pass an object with options for the [stylelint-webpack-plugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/#options) to the `mix.stylelint()` function.

And you're done!
