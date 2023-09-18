import { actions } from "@storybook/addon-actions";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { Preview } from "@storybook/react";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";
import { dark } from './themes';

import { PageWrapper } from "../src/components/page-wrapper/PageWrapperComponent";
import { LinkProvider } from "../src/docs/LinkProvider";

const myActions = actions("radio");
window._ks.radio.on("*", myActions.radio);

const preview: Preview = {
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
          "Blog",
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
      theme: dark,
      container: (props: DocsContainerProps) => (
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
  // @ts-expect-error
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
