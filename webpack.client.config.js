const baseConfig = require('./webpack.config.js')

const clientConfig = {
  entry: {
    'dist/client': './src/client.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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

const mergedConfig = { ...baseConfig, ...clientConfig }

module.exports = mergedConfig

