const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = 'dist'

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
  favicon: './public/favicon.ico',
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
}
