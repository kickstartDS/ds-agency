const path = require("node:path");
const fs = require("node:fs");
const babelRegister = require("@babel/register");
const registerRequireContextHook = require("@storybook/babel-plugin-require-context-hook/register");
const registerGlobalJSDOM = require("global-jsdom");
const fg = require("fast-glob");
const esbuild = require("esbuild");
const reactElementToJSXString = require("react-element-to-jsx-string");
const { normalizeStories } = require("@storybook/core-common");
const { toRequireContext } = require("@storybook/core-webpack");

babelRegister({
  extensions: [".ts", ".tsx", ".jsx", ".js", ".mjs"],
  cache: true,
});
registerRequireContextHook();
registerGlobalJSDOM();

// JSDOM Polyfills & mocks
global.ResizeObserver = require("resize-observer-polyfill");
global.addEventListener = window.addEventListener;
window.matchMedia = () => ({ addEventListener() {} });

const storybook = require("@storybook/react");
const workingDir = "./tmp";
const configDir = workingDir + "/.storybook";

const main = require("../.storybook/main.ts");
const storiesGlob = main.default.stories.filter(
  (storyGlob) => !storyGlob.endsWith(".mdx")
);

const bundle = async () => {
  const entryPoints = fg.sync(storiesGlob, {
    cwd: "./storybook",
    absolute: true,
  });
  entryPoints.push(
    "./.storybook/preview.tsx",
    "./.storybook/main.ts",
    "./node_modules/@kickstartds/core/lib/storybook/index.js"
  );

  await esbuild.build({
    entryPoints,
    platform: "node",
    format: "esm",
    outdir: workingDir,
    loader: {
      ".mdx": "empty",
      ".scss": "empty",
      ".css": "empty",
    },
    external: ["react", "react-dom"],
    bundle: true,
    splitting: true,
  });

  // babelRegister ignores `node_modules` folder
  fs.mkdirSync("./tmp/_node_modules/@kickstartds/core/lib/storybook", {
    recursive: true,
  });
  fs.renameSync(
    "./tmp/node_modules/@kickstartds/core/lib/storybook/index.js",
    "./tmp/_node_modules/@kickstartds/core/lib/storybook/index.js"
  );
};

const configureStorybook = () => {
  const {
    unpack,
  } = require("../tmp/_node_modules/@kickstartds/core/lib/storybook/index.js");
  const preview = require("../tmp/.storybook/preview.js").default;
  storybook.setProjectAnnotations(preview);

  const normalizedStories = normalizeStories(storiesGlob, {
    configDir,
    workingDir,
  });
  const storyLoaders = normalizedStories.map((specifier) => {
    const { path: basePath, recursive, match } = toRequireContext(specifier);
    return global.__requireContext(workingDir, basePath, recursive, match);
  });
  storybook.configure(storyLoaders, false, false);
  return (story) =>
    story.storyFn({ ...story, args: unpack(story.initialArgs) });
};

const findComponent = (components, story) => {
  const componentName = path.basename(story.parameters.fileName, ".stories.js");
  const componentFileName = story.parameters.fileName.replace(
    /\.stories\.js$/,
    "Component"
  );
  const fullComponentFileName = fg.sync(componentFileName + ".[tj]sx")[0];
  if (fullComponentFileName) {
    if (!components.has(componentFileName)) {
      components.set(componentFileName, new Set());
    }
    components.get(componentFileName).add(componentName);
    return true;
  } else {
    console.warn(" ⚠️  Component file not found:", componentFileName);
    return false;
  }
};

(async () => {
  await bundle();
  const renderSnippet = configureStorybook();
  const snippets = [];
  const components = new Map();
  for (const story of storybook.raw()) {
    const { kind: group, name, parameters: { playroom } = {} } = story;
    if (
      playroom?.disable ||
      story.title.startsWith("Pages/") ||
      !story.component
    )
      continue;

    console.log(`Generating ${[group, name].join("/")} snippet...`);
    const found = findComponent(components, story);

    if (!found) {
      continue;
    }

    const snippet = renderSnippet(story);
    const renderFunction = snippet.type.render || snippet.type;
    if (renderFunction && (renderFunction.name || renderFunction.displayName)) {
      const {
        unpack,
      } = require("../tmp/_node_modules/@kickstartds/core/lib/storybook/index.js");

      const code = reactElementToJSXString.default(snippet);
      const args = unpack(story.initialArgs);
      const screenshot = `img/screenshots/${story.id}.png`;
      const id = story.id;
      snippets.push({ id, group, name, code, args, screenshot });
    } else {
      console.warn(" ⚠️  Component has no `displayName`");
    }
  }

  fs.writeFileSync(
    "components.ts",
    [...components.entries()]
      .map(
        ([componentFileName, imports]) =>
          `export {${[...imports].join(",")}} from "${componentFileName}"; `
      )
      .join("\n")
  );
  fs.writeFileSync("snippets.json", JSON.stringify(snippets, null, 2));
})();
