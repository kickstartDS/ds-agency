const path = require("node:path");
const { pathToFileURL } = require("node:url");
const crypto = require("node:crypto");
const sass = require("sass");
const sassNodeModulesImporter = require("./sassNodeModulesImporter");

module.exports = (options = {}) => {
  const styleRe = /\.s?css$/;
  const styles = {};

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

    renderChunk(code, chunk) {
      const cssModuleIds = chunk.moduleIds.filter((moduleId) =>
        styleRe.test(moduleId)
      );

      if (!cssModuleIds.length) return null;

      let imports = "";
      for (const moduleId of cssModuleIds) {
        const style = styles[moduleId];
        if (!style.referenceId) {
          const { source, fileName } = style;
          style.referenceId = this.emitFile({
            type: "asset",
            name: fileName,
            fileName: path.join(path.parse(chunk.fileName).dir, fileName),
            source,
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
