import { Args, GlobalTypes } from "@storybook/types";
import { Decorator } from "@storybook/react";
import { useTheme } from "../src/themes/useTheme";
import * as themes from "../src/themes";

const toolbarItems = Object.entries(themes).map(([key, { title }]) => ({
  title,
  value: key,
}));

export const globalThemeTypes: GlobalTypes = {
  theme: {
    name: "Theme",
    description: "Global token set",
    defaultValue: toolbarItems[0].value,
    toolbar: {
      // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
      icon: "eye",
      items: toolbarItems,
      dynamicTitle: true,
    },
  },
};

export const themeSwitchDecorator: Decorator<Args> = (storyFn, context) => {
  useTheme(context.globals.theme);
  return storyFn(context);
};
