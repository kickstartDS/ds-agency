const path = require("node:path");
const { pathToFileURL } = require("node:url");
const crypto = require("node:crypto");
const sass = require("sass");
const postcss = require("postcss");
const sassNodeModulesImporter = require("./sassNodeModulesImporter");

module.exports = (options = {}) => {
  const { postcssPlugins = [] } = options;
  const styleRe = /\.s?css$/;
  const styles = {};
  let absoluteOutputdir;

  const postcssProcessor = postcss(postcssPlugins);

  return {
    name: "styles",

    async transform(code, id) {
      if (!styleRe.test(id)) return;

      const hash = crypto.createHash("sha1").update(code).digest("hex");

      if (styles[id]?.hash !== hash) {
        const compiled = sass.compileString(code, {
          url: pathToFileURL(id),
          importers: [sassNodeModulesImporter],
        });

        if (compiled.css.length) {
          styles[id] = {
            source: compiled.css,
            // name: `${path.parse(id).name}-${hash.slice(0, 4)}.css`,
            name: `${path.parse(id).name}.css`,
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

      let imports = "";
      for (const scssModuleId of scssModuleIds) {
        const style = styles[scssModuleId];
        if (!style.referenceId) {
          const { source, name } = style;
          const fileName = path.join(path.dirname(chunk.fileName), name);

          const processed = await postcssProcessor.process(source, {
            from: scssModuleId,
            to: path.join(absoluteOutputdir, fileName),
          });

          style.referenceId = this.emitFile({
            type: "asset",
            name,
            fileName,
            source: processed.css,
          });
          chunk.imports.push(name);
          chunk.importedBindings[name] = [];
          imports += `import "./${name}";\n`;
        }
      }

      return imports + code;
    },
  };
};
