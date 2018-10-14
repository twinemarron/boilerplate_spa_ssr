const path = require('path')
const nodeExternals = require('webpack-node-externals')

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

module.exports = {
  mode: env,
  target: 'node',
  devtool: isDevelopment ? 'source-map' : false,
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: [nodeExternals()],
}

