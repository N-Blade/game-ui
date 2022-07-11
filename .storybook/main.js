const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: webpackConfig.resolve.plugins,
    };

    return config;
  },
};
