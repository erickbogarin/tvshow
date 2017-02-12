const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = function() {
  return webpackMerge(commonConfig(), {
    module: {
      rules: [
         {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?sourceMap!postcss-loader?pack=custom!sass-loader?sourceMap',
        },
      ]
    },    
    devtool: 'source-map',    
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new DashboardPlugin(),
    ],
    devServer: {      
      inline: true,
      contentBase: path.resolve(__dirname, '../build'),
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      port: 9000
    },
  });
};
