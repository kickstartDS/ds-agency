import { useEffect, useRef } from "react";
import { Args, DecoratorFunction, GlobalTypes } from "@storybook/types";
import { ReactRenderer } from "@storybook/react";

const styleElelementId = "theme-tokens";
const themes = [
  { value: "/tokens.css", title: "DS Agency" },
  { value: "/tokens-lughausen.css", title: "Lughausen" },
];

export const globalThemeTypes: GlobalTypes = {
  theme: {
    name: "Theme",
    description: "Global token set",
    defaultValue: themes[0].value,
    toolbar: {
      // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
      icon: "eye",
      items: themes,
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
    styleElement.current.setAttribute("href", context.globals.theme);
  }, [context.globals.theme]);

  return <Story key={context.globals.theme} />;
};
