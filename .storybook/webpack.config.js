const path = require('path')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        // loader: require.resolve('awesome-typescript-loader'),
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...config.resolve.alias,
    ...{
      components: path.join(__dirname, '../src/components'),
      containers: path.join(__dirname, '../src/containers'),
      actions: path.join(__dirname, '../src/actions'),
      enums: path.join(__dirname, '../src/enums'),
      reducers: path.join(__dirname, '../src/reducers'),
      routes: path.join(__dirname, '../src/routes'),
      styles: path.join(__dirname, '../src/styles'),
      storage: path.join(__dirname, '../src/storage'),
    },
  }
  return config
}
