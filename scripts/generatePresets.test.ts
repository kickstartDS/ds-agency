/// <reference types="vite/client"/>
// @vitest-environment happy-dom

import path from "node:path";
import fs from "node:fs";
import fg from "fast-glob";
import { describe, test } from "vitest";
import { ReactRenderer, composeStories } from "@storybook/react";
import { Store_CSFExports } from "@storybook/types";
import reactElementToJSXString from "react-element-to-jsx-string";
import { unpack, unpackDecorator } from "@kickstartds/core/lib/storybook";

const preview = {
  decorators: [unpackDecorator],
};

function getAllStoryFiles() {
  const storyFiles = Object.entries(
    import.meta.glob<Store_CSFExports<ReactRenderer>>(
      "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    )
  );

  return storyFiles.map(([filePath, storyFile]) => {
    const storyDir = path.dirname(filePath);
    const componentName = path
      .basename(filePath)
      .replace(/\.(stories)\.[^/.]+$/, "");
    return { filePath, storyFile, componentName, storyDir };
  });
}

type Snippet = {
  id: string;
  group: string;
  name: string;
  code: string;
  args: any;
  screenshot: string;
};

describe("Create Snippets", () => {
  const snippets: Snippet[] = [];
  const components: [string, string][] = [];
  const storyFiles = getAllStoryFiles();

  for (const storyFile of storyFiles) {
    describe(storyFile.componentName, async () => {
      const componentFileName = `${storyFile.storyDir.substring(1)}/${
        storyFile.componentName
      }Component`;

      if (fg.sync(componentFileName + ".[tj]sx")[0]) {
        components.push([storyFile.componentName, componentFileName]);
        const storyModule = await storyFile.storyFile();
        const composed = composeStories(storyModule, preview);

        for (const storyName in composed) {
          test.skipIf(!storyModule.default.title)(storyName, () => {
            const story = composed[storyName];
            const snippet: Snippet = {
              id: story.id,
              group: storyModule.default.title!,
              name: storyName,
              code: reactElementToJSXString(story()),
              args: unpack(story.args),
              screenshot: `img/screenshots/${story.id}.png`,
            };
            snippets.push(snippet);
          });
        }
      } else {
        test.skip("Component file not found");
      }
    });
  }

  test("💾 write snippts.json & components.ts", () => {
    fs.writeFileSync("snippets.json", JSON.stringify(snippets, null, 2));
    fs.writeFileSync(
      "components.ts",
      components
        .map(
          ([componentName, componentFileName]) =>
            `export {${componentName}} from "${componentFileName}"; `
        )
        .join("\n")
    );
  });
});
