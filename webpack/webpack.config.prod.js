import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

import { infograficoDetails } from '../tools/config';

const { metaTags, paths } = infograficoDetails;
const { NODE_ENV, INFO_ENV, INFO_CHANNEL } = process.env;

const isQlt = INFO_ENV === 'qlt';
const outputPublicPath = isQlt ? paths.qlt.cloudfront : paths.prod.cloudfront;

export default {
  entry: path.resolve(__dirname, '..', 'src', 'index'),
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom', // Support react-hot-loader
      '!': path.resolve(__dirname, '..', 'src'),
    },
  },
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: outputPublicPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV,
      INFO_ENV: INFO_ENV || '',
      INFO_CHANNEL: INFO_CHANNEL || 'oglobo',
    }),

    new HtmlWebpackPlugin({
      template: 'src/config/index.pug',
      metaTags,
      minify: {
        removeComments: false,
      },
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
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: '[name].[ext]',
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
              name: '[name].[ext]',
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
              name: '[name].[ext]',
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
              publicPath: `${outputPublicPath}media/images/`,
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
          publicPath: `${outputPublicPath}media/videos/`,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(mp3|ogg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media/audios/',
          publicPath: `${outputPublicPath}media/audios/`,
          name: '[name].[ext]',
        },
      },
    ],
  },
};
