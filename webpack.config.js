const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {                               
      directory: path.join(__dirname, './dist'),  
      watch: true
    }
  },
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "buffer": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "url": false,
      "vm": false,
      "util": false,
      "querystring": false,
      "os": false,
      "constants": false,
      "assert": false,
      path: require.resolve("path-browserify"),
    }
  }
};