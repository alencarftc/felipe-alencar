const path = require("path"); // eslint-disable-line global-require
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WEBPACK_ALIAS = require("./.config/webpack-alias");

const ALIAS = {};
Object.entries(WEBPACK_ALIAS).forEach(([key, value]) => {
  ALIAS[key] = path.resolve(__dirname, value);
});

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    mode: "development",
    context: __dirname,
    entry: path.resolve(__dirname, "src", "index.jsx"),
    devtool: isProduction ? "source-map" : "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[fullhash:8].js",
      sourceMapFilename: "[name].[fullhash:8].map",
      chunkFilename: "[id].[fullhash:8].js",
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      open: false,
      port: 9000,
      historyApiFallback: true,
      hot: "only",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: WEBPACK_ALIAS,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "defaults",
                    },
                  ],
                  "@babel/preset-react",
                ],
              },
            },
            "eslint-loader",
          ],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 0,
              },
            },
          ],
        },
        {
          test: /\.(ico|png|gif|jpg|svg)$/,
          use: "file-loader?name=./images/[name].[ext]",
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            process.env.NODE_ENV !== "production"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  outputStyle: "compressed",
                },
              },
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  path.resolve(__dirname, "src/assets/sass/main.scss"),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: "public/index.html",
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development",
        ),
      }),
    ],
  };
};
