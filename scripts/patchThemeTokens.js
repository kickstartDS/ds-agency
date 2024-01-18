const fs = require("fs");

const themeTokenFiles = Object.entries({
  google: "src/token-google/tokens.css",
  lughausen: "src/token-lughausen/tokens.css",
  telekom: "src/token-telekom/tokens.css",
});

(async () => {
  for (const [theme, tokenFile] of themeTokenFiles) {
    console.log(theme);
    const file = fs.readFileSync(tokenFile, "utf-8");
    const patched = file
      .replace(/\:root(?:, \[ks-theme\])?/g, `[ks-theme=${theme}]`)
      .replaceAll("[ks-inverted=", "[ks-theme=google] [ks-inverted=");
    fs.writeFileSync(tokenFile, patched);
  }
})();
