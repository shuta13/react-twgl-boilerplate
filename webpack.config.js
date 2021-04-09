const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/bundle.[chunkhash].js',
    chunkFilename: 'js/chunk.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        use: ['raw-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // NOTE: not working
            // options: {
            //   hmr: !IS_PRODUCTION,
            // },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [
    !IS_PRODUCTION && new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /react|react-dom|react-router/,
        },
      },
    },
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          extractComments: false,
        }).apply(compiler);
      },
    ],
  },
};
