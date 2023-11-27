const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token-lughausen/dictionary/**/*.json",
    path.join(__dirname, "src/token-lughausen/dictionary/**/*.svg"),
    path.join(
      path.dirname(require.resolve("@kickstartds/core/package.json")),
      "source/design-tokens/icons/*.svg"
    ),
  ],
  platforms: {
    css: {
      buildPath: "src/token-lughausen/",
    },
    html: {
      buildPath: "src/token-lughausen/",
    },
    jsx: {
      buildPath: "src/token-lughausen/",
    },
    storybook: {
      buildPath: "src/token-lughausen/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token-lughausen/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
