// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../src/index.js";
import "../static/index.css";

import IconSprite from "../src/token/icons/IconSprite";
import Providers from "../src/components/Providers";
import { LinkProvider } from "../src/docs/LinkProvider";

const myActions = actions("radio");
window._ks.radio.on("*", myActions.radio);

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Docs",
          ["Welcome", "Integration"],
          "Pages",
          "Components",
          "Layout",
          "Recipes",
          "Design Tokens",
        ],
        method: "alphabetical",
      },
    },
    designToken: {
      disable: true,
    },
    docs: {
      container: (props) => (
        <LinkProvider>
          <Providers>
            <IconSprite />
            <DocsContainer {...props} />
          </Providers>
        </LinkProvider>
      ),
    },
    playroom: {
      url:
        process.env.NODE_ENV === "production"
          ? "http://localhost:9000/playroom/"
          : "http://localhost:9000",
    },
  },
  html: {
    decorator: unpackDecorator,
  },
  decorators:  [
    unpackDecorator,
    (Story) => (
      <Providers>
        <IconSprite />
        <Story />
      </Providers>
    ),
  ]
};

export default preview;
