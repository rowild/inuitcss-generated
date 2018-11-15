//
// THIS IS WORK-IN-PROGRESS!!!
//
// Some good sources:
// https://appdividend.com/2018/03/10/webpack-4-tutorial-example-scratch/
// Clean dist folder:
// https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
// Hint: Check output in console for "outside of project root" to catch any errors
// Copy static assets
// https://webpack.js.org/plugins/copy-webpack-plugin/
// To be checked: https://www.npmjs.com/package/postcss-extract-media-query

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const isDevelopment = process.env.NODE_ENV !== 'production'
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    bundle: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // also tried this
          { loader: 'css-loader', options: {} },
          // { loader: 'postcss-loader', options: {} },
          { loader: 'sass-loader', options: {} }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'Inuitcss - Generated CSS',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'inuitcss-compiled-by-webpack.css',
      minimize: false,
      minify: false
    }),
  ]
}
