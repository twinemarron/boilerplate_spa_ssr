const baseConfig = require('./webpack.config.js')
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
  target: 'node',
  entry: {
    'dist/server': './src/server.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
}

const mergedConfig = { ...baseConfig, ...serverConfig }

module.exports = mergedConfig

