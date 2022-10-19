const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bundle: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/dist",
    },
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
    watchFiles: {
      paths: ["src/**/*.{html,js}"],
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["sass-loader", "css-loader", "style-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        include: __dirname + "/src",
        // include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "QR Code Component",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
