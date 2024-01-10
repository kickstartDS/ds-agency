import { useEffect, useRef } from "react";

const styleElelementId = "theme-tokens";

export const useTheme = (theme: any) => {
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
    if (theme?.tokens) {
      styleElement.current.setAttribute("href", theme.tokens);
    }
  }, [theme]);
};
