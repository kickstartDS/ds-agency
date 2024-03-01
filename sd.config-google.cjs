const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: ["src/token-google/dictionary/**/*.json"],
  platforms: {
    css: {
      buildPath: "src/token-google/",
    },
  },
});
