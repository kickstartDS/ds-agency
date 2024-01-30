import { actions } from "@storybook/addon-actions";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import "lazysizes/plugins/attrchange/ls.attrchange";
import { Preview } from "@storybook/react";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";
import { dark } from "./themes";
import { themeSwitchDecorator, globalThemeTypes } from "./themeSwitch";

import { RawPageWrapper } from "../src/components/page-wrapper/RawPageWrapperComponent";
import { providerDecorator } from "../src/components/Providers";
import { LinkProvider } from "../src/docs/LinkProvider";

import "./manager.css";

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
          ["Archetypes", "Testing"],
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
          <RawPageWrapper>
            <DocsContainer {...props} />
          </RawPageWrapper>
        </LinkProvider>
      ),
    },
    playroom: {
      url: process.env.NODE_ENV === "production" ? "/playroom/" : undefined,
    },
    html: {
      decorators: [unpackDecorator, providerDecorator],
    },
  },
  decorators: [
    unpackDecorator,
    themeSwitchDecorator,
    (Story) => (
      <RawPageWrapper>
        <div className="preview--wrapper">
          <div className="preview">
            <Story />
          </div>
        </div>
      </RawPageWrapper>
    ),
  ],
  globalTypes: {
    ...globalThemeTypes,
  },
};

export default preview;
