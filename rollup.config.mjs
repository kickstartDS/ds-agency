import path from "node:path";
import ts from "rollup-plugin-ts";
import copy from "rollup-plugin-copy";
import fg from "fast-glob";
import { paramCase } from "change-case";
import { nodeExternals } from "rollup-plugin-node-externals";
import postcssUrl from "postcss-url";
import scss from "./scripts/rollupPluginScss.js";

const componentFiles = fg.sync([
  "src/components/**/*Component.(t|j)sx",
  "src/components/Providers.(t|j)sx",
]);
const componentEntryPoints = Object.fromEntries(
  componentFiles.map((fileName) => [
    "components/" +
      paramCase(
        path.basename(fileName, path.extname(fileName)).replace("Component", "")
      ) +
      "/index",
    fileName,
  ])
);
const clientJsFiles = fg.sync(["src/**/*.client.(t|j)s"]);
const clientJsEntryPoints = Object.fromEntries(
  clientJsFiles.map((fileName) => [
    path.join(
      path.relative("src", path.dirname(fileName)),
      path.basename(fileName, path.extname(fileName))
    ),
    fileName,
  ])
);

export default {
  input: { ...componentEntryPoints, ...clientJsEntryPoints },
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    nodeExternals(),
    ts(),
    scss({
      postcssPlugins: [
        postcssUrl({
          url: "rebase",
          assetsPath: process.cwd(),
        }),
      ],
    }),
    copy({
      targets: [
        {
          src: "src/components/*/*.schema?(.dereffed).json",
          dest: "dist/components",
          rename(name, extension) {
            const componentName = name.split(".")[0];
            return `${componentName}/${name}.${extension}`;
          },
        },
        {
          src: "src/token/*.{js,css,html}",
          dest: "dist/tokens",
        },
        {
          src: "static",
          dest: "dist",
        },
      ],
    }),
  ],
};
