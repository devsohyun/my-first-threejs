//Ensure html-webpack-plugin is pre-installed via npm.
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  devServer: {
    port: 8080,
  },
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/bundle.js',
  },
  module: {
    rules: [
      //html
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // JS
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use:
          [
              'babel-loader'
          ]
      },
      // CSS
      {
          test: /\.css$/,
          use:
          [
              MiniCSSExtractPlugin.loader,
              'css-loader'
          ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: './style.css'
    })
  ]
}
