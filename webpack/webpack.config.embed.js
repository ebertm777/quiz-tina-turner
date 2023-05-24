import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

import { infograficoDetails } from '../tools/config';

const { paths } = infograficoDetails;
const { INFO_ENV } = process.env;

const isQlt = INFO_ENV === 'qlt';
const outputPublicPath = isQlt ? paths.qlt.cloudfront : paths.prod.cloudfront;

export default {
  entry: path.resolve(__dirname, '..', 'src', 'index'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: outputPublicPath,
    filename: '[name]-embed.js',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom', // Support react-hot-loader
      '!': path.resolve(__dirname, '..', 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/config/index.pug',
      filename: 'embed.txt',
      minify: true,
      inject: true,
      isEmbed: true,
    }),
  ],
};
