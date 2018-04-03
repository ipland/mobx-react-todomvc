var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var _cssLoaders = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap,
      importLoaders: 1
    }
  }

  var _cssLoadersModule = options.cssModule
    ?
    {
      modules: true,
      localIdentName: '[local]--[hash:base64:5]'
    }
    : {}

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var cssLoaders = Object.assign({}, _cssLoaders)

    if (loaderOptions && loaderOptions.cssModule) {
      cssLoaders.options = Object.assign({}, _cssLoaders.options, _cssLoadersModule)
      delete loaderOptions.cssModule
    }

    var loaders = [
      cssLoaders,
      {
        loader: 'postcss-loader',
        options: { sourceMap: options.sourceMap }
      }
    ]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, { sourceMap: options.sourceMap })
      })
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(null, { cssModule: options.cssModule }),
    // postcss: generateLoaders(),
    // scss: generateLoaders('sass', { cssModule: options.cssModule }),
    less: generateLoaders('less', { cssModule: options.cssModule })
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(Object.assign({ cssModule: false }, options))
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
