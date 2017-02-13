const { join } = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
const path = require('path');
var ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    output: {
      filename: '[name].[chunkhash].js',
      path: join(__dirname, '../build'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractText.extract('css-loader?sourceMap&-autoprefixer!postcss-loader?pack=custom!sass-loader?sourceMap'),
        },
      ],
    },
    plugins: [
      
      new ExtractText('styles/app.[hash].css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
       new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new HtmlWebpackPlugin({
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        mobile: true,        
        template: './index.html',        
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: '/',
          postcss: function() {
            return {
              defaults: [autoprefixer],
              custom: [
                autoprefixer({
                  browsers: [
                    'ie >= 9',
                    'ie_mob >= 10',
                    'ff >= 30',
                    'chrome >= 34',
                    'safari >= 7',
                    'opera >= 23',
                    'ios >= 7',
                    'android >= 4.4',
                    'bb >= 10',
                  ],
                }),
              ],
            };
          },
        },
      }),
    ]
  }
)};
