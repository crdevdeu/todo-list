const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '..', '..', 'dist');
const SRC_DIR = path.join(__dirname, '..', '..', 'src');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  plugins: [ new HtmlWebpackPlugin() ],
};
