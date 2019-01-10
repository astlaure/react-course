const path = require('path');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PizzaRoutes = require('./stub/pizza.routes');

module.exports = env => ({
  entry: env.final ? './final/index.jsx' : './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, env.final ? '/fdist' : '/dist'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', { loader: 'sass-loader', options: { implementation: sass } }] },
      { test: /\.(png|jpg|svg)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: env.final ? './final/index.html' : './src/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    before(app) {
      app.use(PizzaRoutes);
    },
  },
});
