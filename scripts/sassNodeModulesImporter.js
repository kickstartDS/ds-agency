const { pathToFileURL } = require("url");

module.exports = {
  findFileUrl(url) {
    console.log("#################");
    console.log("url", url);
    // Load paths only support relative URLs.
    if (/^[a-z]+:/i.test(url)) return null;
    return new URL(url, pathToFileURL(loadPath));
  },
};
