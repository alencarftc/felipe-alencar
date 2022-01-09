const path = require("path");
const WEBPACK_ALIAS = require("../.config/webpack-alias");

const ALIAS = {};
Object.entries(WEBPACK_ALIAS).forEach(([key, value]) => {
  ALIAS[key] = path.resolve(__dirname, "..", value);
});

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
      {
        loader: "sass-resources-loader",
        options: {
          resources: [
            path.resolve(__dirname, "../", "src/assets/sass/main.scss"),
          ],
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });
  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ];

  config.resolve.alias = ALIAS;

  return config;
};
