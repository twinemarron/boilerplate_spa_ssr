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
  // config.resolve.alias = {
  //   components: path.join(__dirname, '../src/components'),
  //   enums: path.join(__dirname, '../src/enums'),
  // }
  // console.log('config:', config)
  return config
}
