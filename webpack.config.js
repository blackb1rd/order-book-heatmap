const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode: 'development',
  // Define development options
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
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
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
            // inject CSS to page
            loader: 'style-loader'
          }, {
            // translates CSS into CommonJS modules
            loader: 'css-loader'
          }, {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            // compiles Sass to CSS
            loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'D3 OrderBook Heatmap',
      template: './src/index.html',
      filename: './index.html' //relative to root of the application
    })
  ]
};