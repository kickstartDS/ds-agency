const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token-google/dictionary/**/*.json",
    path.join(__dirname, "src/token-google/dictionary/**/*.svg"),
    path.join(
      path.dirname(require.resolve("@kickstartds/core/package.json")),
      "source/design-tokens/icons/*.svg"
    ),
  ],
  platforms: {
    css: {
      buildPath: "src/token-google/",
    },
    html: {
      buildPath: "src/token-google/",
    },
    jsx: {
      buildPath: "src/token-google/",
    },
    storybook: {
      buildPath: "src/token-google/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token-google/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
