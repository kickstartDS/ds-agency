const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const include = [
  path.resolve(__dirname, "src"),
  path.resolve(__dirname, "node_modules", "@kickstartds"),
  path.resolve(__dirname, "node_modules", "@glidejs"),
];

module.exports = {
  title: "Design System Agency",
  components: "./components.ts",
  outputPath: "./storybook-static/playroom",
  snippets: "./snippets.json",
  frameComponent: "./src/playroom/Frame.tsx",
  themes: "./src/themes/index.ts",
  widths: [425, 768, 1440],
  port: 9000,
  openBrowser: false,
  paramType: "hash",
  baseUrl: "/playroom/",
  iframeSandbox: "allow-scripts",
  webpackConfig: () => ({
    plugins: [
      new CopyPlugin({
        patterns: ["static"],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include,
          use: ["babel-loader"],
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/,
          include,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          include,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["node_modules"],
                },
              },
            },
          ],
        },
      ],
    },
  }),
};
