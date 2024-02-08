import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "storybook-design-token",
      options: { designTokenGlob: "src/token/storybook/*" },
    },
    "@kickstartds/storybook-addon-html",
    "storybook-addon-playroom",
    "@kickstartds/storybook-addon-component-tokens",
    "@storybook/addon-a11y",
    "@kickstartds/storybook-addon-jsonschema",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../static"],

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: "tag",
  },
};
export default config;
