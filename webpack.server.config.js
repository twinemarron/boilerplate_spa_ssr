const baseConfig = require('./webpack.config.js')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const serverConfig = {
  target: 'node',
  entry: {
    'dist/server': './src/server.ts',
  },
  externals: [nodeExternals()],
}

const mergedConfig = { ...baseConfig, ...serverConfig }

module.exports = mergedConfig
