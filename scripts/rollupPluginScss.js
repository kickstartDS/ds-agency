const path = require("node:path");
const { pathToFileURL } = require("node:url");
const crypto = require("node:crypto");
const sass = require("sass");
const postcss = require("postcss");
const postcssUrl = require("postcss-url");
const sassNodeModulesImporter = require("./sassNodeModulesImporter");

const postcssProcessor = postcss([postcssUrl({ url: "rebase" })]);

module.exports = (options = {}) => {
  const styleRe = /\.s?css$/;
  const styles = {};
  let absoluteOutputdir;

  return {
    name: "styles",

    async transform(code, id) {
      if (!styleRe.test(id)) return;

      const hash = crypto.createHash("sha1").update(code).digest("hex");

      if (styles[id]?.hash !== hash) {
        const comiled = sass.compileString(code, {
          url: pathToFileURL(id),
          importers: [sassNodeModulesImporter],
        });

        if (comiled.css.length) {
          styles[id] = {
            source: comiled.css,
            // fileName: `${path.parse(id).name}-${hash.slice(0, 4)}.css`,
            fileName: `${path.parse(id).name}.css`,
          };

          return {
            code: "",
            moduleSideEffects: "no-treeshake",
          };
        }
      }

      return "";
    },

    renderStart(outputOptions) {
      absoluteOutputdir = path.join(process.cwd(), outputOptions.dir);
    },

    async renderChunk(code, chunk) {
      const scssModuleIds = chunk.moduleIds.filter((moduleId) =>
        styleRe.test(moduleId)
      );

      if (!scssModuleIds.length) return null;

      const chunkDir = path.dirname(chunk.fileName);
      let imports = "";
      for (const scssModuleId of scssModuleIds) {
        const style = styles[scssModuleId];
        if (!style.referenceId) {
          const { source, fileName } = style;

          const processed = await postcssProcessor.process(source, {
            from: scssModuleId,
            to: path.join(absoluteOutputdir, chunkDir),
          });

          style.referenceId = this.emitFile({
            type: "asset",
            name: fileName,
            fileName: path.join(chunkDir, fileName),
            source: processed.css,
          });
          chunk.imports.push(fileName);
          chunk.importedBindings[fileName] = [];
          imports += `import "./${fileName}";\n`;
        }
      }

      return imports + code;
    },
  };
};
