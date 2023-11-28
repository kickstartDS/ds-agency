import { useEffect, useRef } from "react";
import { Args, DecoratorFunction, GlobalTypes } from "@storybook/types";
import { ReactRenderer } from "@storybook/react";
import { themes } from "../src/themes";

const styleElelementId = "theme-tokens";
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

export const themeSwitchDecorator: DecoratorFunction<ReactRenderer, Args> = (
  Story,
  context
) => {
  const styleElement = useRef<HTMLLinkElement>(null);

  useEffect(() => {
    const prevStyleElement = document.getElementById(
      styleElelementId
    ) as HTMLLinkElement | null;
    if (prevStyleElement) {
      styleElement.current = prevStyleElement;
    } else {
      styleElement.current = document.createElement("link");
      styleElement.current.setAttribute("rel", "stylesheet");
      styleElement.current.id = styleElelementId;
      document.head.appendChild(styleElement.current);
    }
  }, []);

  useEffect(() => {
    styleElement.current.setAttribute(
      "href",
      themes[context.globals.theme].tokens
    );
  }, [context.globals.theme]);

  return <Story key={context.globals.theme} />;
};
