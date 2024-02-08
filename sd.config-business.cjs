const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token-business/dictionary/**/*.json",
    path.join(__dirname, "src/token-business/dictionary/**/*.svg"),
    path.join(
      path.dirname(require.resolve("@kickstartds/core/package.json")),
      "source/design-tokens/icons/*.svg"
    ),
  ],
  platforms: {
    css: {
      buildPath: "src/token-business/",
    },
    html: {
      buildPath: "src/token-business/",
    },
    jsx: {
      buildPath: "src/token-business/",
    },
    storybook: {
      buildPath: "src/token-business/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token-business/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
