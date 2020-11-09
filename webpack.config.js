const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 
  devServer: {
    contentBase: path.join(__dirname, "build"),
    watchContentBase: true,
    compress: true,
    port: 3000,
  }
  ,
  plugins: [new HtmlWebpackPlugin({template: __dirname + '/src/index.html'})]
};