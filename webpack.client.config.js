const baseConfig = require('./webpack.config.js')

const serverConfig = {
  entry: {
    'public/js/client': './src/client.tsx',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.client.json',
            },
          },
        ],
      },
    ],
  },
}

const mergedConfig = { ...baseConfig, ...serverConfig }

module.exports = mergedConfig

