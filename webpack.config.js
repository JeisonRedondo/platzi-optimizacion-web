const webpack = require('webpack')
const path = require('path')
const shouldAnalyze = process.argv.includes('--analyze')

const nodeEnv = process.env.NODE_ENV || 'development'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = []

if (shouldAnalyze) {
  plugins.push(new BundleAnalyzerPlugin())
}

const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: '.',
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader']
      },
    ],
  },
}

module.exports = config
