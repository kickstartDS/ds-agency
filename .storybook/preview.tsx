import { actions } from "@storybook/addon-actions";
import { LegacyStoryFn } from "@storybook/types";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { defaultDecorateStory } from "@storybook/preview-api";
import { Preview, ReactRenderer, StoryContext } from "@storybook/react";
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
          ["Pages", "Testing"],
          "Components",
          "Paid Components",
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
      url:
        process.env.NODE_ENV === "production"
          ? "http://localhost:9000/playroom/"
          : "http://localhost:9000",
    },
    html: {
      decorator: (Story: LegacyStoryFn<ReactRenderer>, context: StoryContext) =>
        defaultDecorateStory(Story, [unpackDecorator, providerDecorator])(
          context
        ),
    },
  },
  decorators: [
    unpackDecorator,
    themeSwitchDecorator,
    (Story) => (
      <RawPageWrapper>
        <Story />
      </RawPageWrapper>
    ),
  ],
  globalTypes: {
    ...globalThemeTypes,
  },
};

export default preview;
