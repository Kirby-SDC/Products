const path = require("path");
const BundleAnalyzerPlugin =
require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./client/src/index.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  plugins: [new BundleAnalyzerPlugin({openAnalyzer: true}), new CompressionPlugin({
    algorithm: 'gzip',
    test: /.js$|.css$|.jsx/,
  })],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  },
  optimization: {sideEffects: true},

}