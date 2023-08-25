const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  components: "./src/playroom/components.ts",
  outputPath: "./dist/playroom",

  title: "Demo Playroom",
  themes: "./src/playroom/themes/index.ts",
  snippets: "./src/playroom/snippets.ts",
  frameComponent: "./src/playroom/FrameComponent.tsx",
  // scope: './playroom/useScope.js',
  widths: [425, 768, 1440],
  port: 9000,
  openBrowser: true,
  paramType: "search", // default is 'hash'
  exampleCode: `
    <Button
      href="#"
      icon="chevron-right"
      label="More info"
    />
  `,
  baseUrl: "/playroom/",
  iframeSandbox: "allow-scripts",
  typeScriptFiles: ["src/components/**/*.{ts,tsx}", "!**/node_modules"],
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
          exclude: /node_modules\/(?!(@kickstartds)\/).*/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          include: [__dirname],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  }),
};
