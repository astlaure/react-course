const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "[name].bundle.js",
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  mode: "development",
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test:/\.(png|jpg|svg)$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    before(app) {
      app.get('/pizzas', (req, res) => {
        res.json([
          {
            id: 1,
            name: 'Cheese',
            price: '10.99',
            ingredients: [
              'cheese',
            ]
          },
          {
            id: 2,
            name: 'Pepperoni',
            price: '12.99',
            ingredients: [
              'cheese',
              'pepperoni',
            ]
          },
          {
            id: 3,
            name: 'Hawaiian',
            price: '15.99',
            ingredients: [
              'cheese',
              'ham',
              'pineapple'
            ]
          }
        ])
      })
    }
  }
};
