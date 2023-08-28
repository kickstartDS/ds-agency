import type { CSSLength } from "@bedrock-layout/spacing-constants";

declare module "@bedrock-layout/spacing-constants" {
  export interface DefaultTheme {
    space: {
      "none": CSSLength;
      "xxs": CSSLength;
      "xs": CSSLength;
      "s": CSSLength;
      "m": CSSLength;
      "l": CSSLength;
      "xl": CSSLength;
      "xxl": CSSLength;
    };
  }
}
