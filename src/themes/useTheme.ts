import { useEffect } from "react";
import "./themes.scss";

export const useTheme = (themeName: string) => {
  useEffect(() => {
    if (themeName && themeName !== "dsa") {
      document.body.setAttribute("ks-theme", themeName);
    } else {
      document.body.removeAttribute("ks-theme");
    }
  }, [themeName]);
};
