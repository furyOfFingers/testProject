const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  // entry: ['react-hot-loader/patch', './src/index'],
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.styl'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: {
            esModule: true,
          } },
          { loader: 'css-loader', options: {
            esModule: true,
          } }
        ],
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: "[local]___[hash:base64:5]",
              esModule: true,
            },
          },
          { loader: 'stylus-loader' },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase:  path.join(__dirname, '/dist'), // both src and output dirs
    watchContentBase: true,
    inline: true,
    clientLogLevel: 'silent',
    hot: true
  },
  plugins: [htmlPlugin],
};
