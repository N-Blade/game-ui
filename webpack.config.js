const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
