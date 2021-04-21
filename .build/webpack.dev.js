const path = require('path');
const { merge } = require('webpack-merge');
const config = require('config');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: buildPath,
    compress: false,
    historyApiFallback: true,
    writeToDisk: false
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: config.get('localURL'),
      files : [
          path.join(buildPath, "/**/*.cshtml")
      ]
    })
  ],
  watch: true,
  watchOptions: {
      ignored: /node_modules/
  }
});