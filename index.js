const mix = require("laravel-mix");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");

class Stylelint {
  register(options = {}) {
    this.options = options;
  }

  dependencies() {
    return [
      "stylelint",
      "stylelint-webpack-plugin",
      "stylelint-config-standard",
    ];
  }

  webpackPlugins() {
    return new StylelintWebpackPlugin({
      ...this.options,
    });
  }
}

mix.extend("stylelint", new Stylelint());
