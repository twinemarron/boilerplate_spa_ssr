const baseConfig = require('./webpack.config.js')

const serverConfig = {
  entry: {
    'dist/server': './src/server.ts',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
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
}

const mergedConfig = { ...baseConfig, ...serverConfig }

module.exports = mergedConfig

