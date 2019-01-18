const path = require('path')

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development'

module.exports = {
  mode: env,
  devtool: isDevelopment ? 'source-map' : false,
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules'],
  },
}
