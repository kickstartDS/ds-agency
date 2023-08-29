const path = require("node:path");
const { pathToFileURL } = require("node:url");

const resolve = (/** @type {string[]} */ possibleFileNames) => {
  let error;

  for (const possibleFileName of possibleFileNames) {
    try {
      return require.resolve(possibleFileName);
    } catch (e) {
      error = e;
    }
  }

  throw error;
};

/** @type {import("sass").FileImporter<"sync">} */
module.exports = {
  findFileUrl(url) {
    const { dir, base, ext } = path.parse(url);
    const possibleFileNames = ext
      ? [url]
      : [
          path.join(dir, base + ".scss"),
          path.join(dir, "_" + base + ".scss"),
          path.join(dir, base + ".css"),
        ];

    try {
      const resolved = resolve(possibleFileNames);
      return pathToFileURL(resolved);
    } catch (e) {
      return null;
    }
  },
};
