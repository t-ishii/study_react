const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || "development";
const isProduction = mode == 'production'

module.exports = {
  mode,
  context: path.join(__dirname, 'src'),
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  devtool: isProduction ? false : 'source-map',
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
