const { resolve, join } = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    context: join(__dirname, '../app'),    
    entry: './scripts/index.js',
    output: {
      path: resolve(__dirname, '../build'),
      filename: 'bundle.js',
      publicPath: '/',    
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /.(js|jsx)$/,        
          exclude: /node_modules/
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]'],
          include: /fonts/,
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['file-loader?name=fonts/[name].[ext]'],          
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),       
      new webpack.LoaderOptionsPlugin({
        options: {
          context: '/',
          postcss: function() {
            return {
              defaults: [autoprefixer],
              custom: [
                autoprefixer({
                  browsers: [
                    'ie >= 11',
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
};
