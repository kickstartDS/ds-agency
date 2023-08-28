/**
 * Bedrock override
 *
 * @see https://www.bedrock-layout.dev/?path=/docs/getting-started-lesson-3-spacing--docs
 */

import { ThemeProvider, DefaultTheme } from "@bedrock-layout/spacing-constants";
import { FC, ReactNode } from "react";

const theme: DefaultTheme = {
  space: {
    none: "0px",
    xxs: "var(--ks-spacing-xxs)",
    xs: "var(--ks-spacing-xs)",
    s: "var(--ks-spacing-s)",
    m: "var(--ks-spacing-m)",
    l: "var(--ks-spacing-l)",
    xl: "var(--ks-spacing-xl)",
    xxl: "var(--ks-spacing-xxl)",
  },
};

export const BedrockProvider: FC<{ children: ReactNode }> = (props) => (
  <ThemeProvider theme={theme} {...props} />
);
