const webpackConfig = require('../webpack.config')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  webpackFinal: config => {
    const configImagesRule = config.module.rules.findIndex(({ test }) => test.test('.png'))
    const webpackImagesRule = webpackConfig.module.rules.findIndex(({ test }) => test.test('.png'))
    const webpackSvgRule = webpackConfig.module.rules.findIndex(({ test }) => test.test('.svg'))

    config.module.rules[configImagesRule] = webpackConfig.module.rules[webpackImagesRule]
    config.module.rules = [...config.module.rules, webpackConfig.module.rules[webpackSvgRule]]

    config.resolve.plugins = [...webpackConfig.resolve.plugins]

    return config
  },
}
