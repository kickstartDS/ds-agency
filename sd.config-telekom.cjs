const path = require("path");
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "src/token-telekom/dictionary/**/*.json",
    path.join(__dirname, "src/token-telekom/dictionary/**/*.svg"),
    path.join(
      path.dirname(require.resolve("@kickstartds/core/package.json")),
      "source/design-tokens/icons/*.svg"
    ),
  ],
  platforms: {
    css: {
      buildPath: "src/token-telekom/",
    },
    html: {
      buildPath: "src/token-telekom/",
    },
    jsx: {
      buildPath: "src/token-telekom/",
    },
    storybook: {
      buildPath: "src/token-telekom/storybook/",
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: "src/token-telekom/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
