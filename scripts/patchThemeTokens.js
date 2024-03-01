const fs = require("fs");

const themeTokenFiles = Object.entries({
  business: "src/token-business/tokens.css",
  google: "src/token-google/tokens.css",
  ngo: "src/token-ngo/tokens.css",
  telekom: "src/token-telekom/tokens.css",
});

(async () => {
  for (const [theme, tokenFile] of themeTokenFiles) {
    const file = fs.readFileSync(tokenFile, "utf-8");
    const patched = file
      .replace(/\:root(?:, \[ks-theme\])?/g, `:root [ks-theme=${theme}]`)
      .replaceAll("[ks-inverted=", `[ks-theme=${theme}] [ks-inverted=`);
    fs.writeFileSync(tokenFile, patched);
  }
})();
