const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
