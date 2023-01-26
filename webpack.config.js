const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true,
    publicPath: '/',
  },
  target: 'web',
  devServer: {
    port: '5000',
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'src')
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader, options: {}},
          {loader: 'css-loader', options: {url: true, import: true/*, modules: true*/}},
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  
};