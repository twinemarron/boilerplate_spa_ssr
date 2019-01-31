const baseConfig = require('./webpack.config.js')

const clientConfig = {
  entry: {
    'dist/client': './src/client.tsx',
  },
}

const mergedConfig = { ...baseConfig, ...clientConfig }

module.exports = mergedConfig
