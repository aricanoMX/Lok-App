var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', 'json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      helpers: path.resolve(__dirname, './src/helpers'),
      hooks: path.resolve(__dirname, './src/hooks'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    historyApiFallback: true,
    port: 3000,
    watchContentBase: true,
    open: true,
  },
};
