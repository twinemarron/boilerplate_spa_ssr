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
    alias: {
      components: path.join(__dirname, 'src/components'),
      containers: path.join(__dirname, 'src/containers'),
      actions: path.join(__dirname, 'src/actions'),
      enums: path.join(__dirname, 'src/enums'),
      reducers: path.join(__dirname, 'src/reducers'),
      routes: path.join(__dirname, 'src/routes'),
      styles: path.join(__dirname, 'src/styles'),
      storage: path.join(__dirname, 'src/storage'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            // loader: 'ts-loader',
            loader: 'awesome-typescript-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
}
