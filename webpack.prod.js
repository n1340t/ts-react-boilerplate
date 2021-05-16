const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash:8].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: './',
  },
});
