import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

import { infograficoDetails } from '../tools/config';

const { metaTags } = infograficoDetails;
const { NODE_ENV, INFO_ENV, INFO_CHANNEL } = process.env;

export default {
  entry: [
    // must be first entry to properly set public path
    './src/config/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, '..', 'src', 'index'),
  ],
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom', // Support react-hot-loader
      '!': path.resolve(__dirname, '..', 'src'),
    },
  },
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV,
      INFO_ENV: INFO_ENV || '',
      INFO_CHANNEL: INFO_CHANNEL || 'oglobo',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/config/index.pug',
      metaTags,
      minify: true,
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'media/images/',
              publicPath: './media/images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media/videos/',
          publicPath: './media/videos/',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(mp3|ogg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media/audios/',
          publicPath: './media/audios/',
          name: '[name].[ext]',
        },
      },
    ],
  },
};
