<<<<<<< HEAD
=======
var path = require('path');
>>>>>>> issue #4, version 0.7.0, upgraded webpack
const webpack = require('webpack');

const config = {
  resolve: {
<<<<<<< HEAD
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.css'],
    alias: {
      'ng2-scrollable': '../src/index.ts'
=======
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      'ng2-scrollable': path.join(__dirname, '..', 'src', 'index')
>>>>>>> issue #4, version 0.7.0, upgraded webpack
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
<<<<<<< HEAD
    loaders: [
      { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw' }
    ]
  },
  plugins: [],
  ts: {
    include: ['src/**/*.ts', 'app/**/*.ts']
  },
=======
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
>>>>>>> issue #4, version 0.7.0, upgraded webpack
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

<<<<<<< HEAD
if (process.env.NODE_ENV === 'prod') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ];
  config.module.loaders.push({
    test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
=======
module.exports = config;
>>>>>>> issue #4, version 0.7.0, upgraded webpack
