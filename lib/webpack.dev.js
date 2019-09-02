const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    hot: true,
  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
