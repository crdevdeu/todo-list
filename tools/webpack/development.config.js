const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '..', '..', 'src');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [ new HtmlWebpackPlugin() ],
};
