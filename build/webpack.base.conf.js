var path = require('path')
var utils = require('./utils')
var config = require('../config')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    // Note:
    // hash only for development mode
    // chunkhash for all mode
    filename: '[name].js?[hash]',
    chunkFilename: '[name]js?[chunkhash].',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [ 'src', 'node_modules' ],
    alias: { '@': resolve('src') }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [ resolve('src') ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'image-webpack-loader',
      //   // This will apply the loader before the other ones
      //   enforce: 'pre',
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
