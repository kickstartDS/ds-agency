import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";

import { PageWrapper } from "../src/components/page-wrapper/PageWrapperComponent";
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
          <PageWrapper>
            <DocsContainer {...props} />
          </PageWrapper>
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
  decorators: [
    unpackDecorator,
    (Story) => (
      <PageWrapper>
        <Story />
      </PageWrapper>
    ),
  ],
};

export default preview;