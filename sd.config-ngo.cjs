const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token-ngo/dictionary/**/*.json",
    path.join(__dirname, "src/token-ngo/dictionary/**/*.svg"),
    path.join(
      path.dirname(require.resolve("@kickstartds/core/package.json")),
      "source/design-tokens/icons/*.svg"
    ),
  ],
  platforms: {
    css: {
      buildPath: "src/token-ngo/",
    },
    html: {
      buildPath: "src/token-ngo/",
    },
    jsx: {
      buildPath: "src/token-ngo/",
    },
    storybook: {
      buildPath: "src/token-ngo/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token-ngo/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
