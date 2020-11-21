const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/InstagramParser.js',
  output: {
    path: path.resolve('lib'),
    filename: 'InstagramParser.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      }
    ],
  }
};
