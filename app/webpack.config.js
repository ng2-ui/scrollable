var path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      '@ngui/scrollable': '../src/index.ts'
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        use: [
          {
            loader: 'ts-loader',
            options: {
              include: ['src/**/*.ts', 'app/**/*.ts']
            },
          },
          'angular2-template-loader'
        ],
      },
      { test: /\.html$/, use: ['raw-loader'] },
      { test: /\.css$/, use: ['css-loader'] }
    ]
  },
  plugins: [],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

module.exports = config;
