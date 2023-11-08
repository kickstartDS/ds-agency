import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import "./section.scss";

export const Section = forwardRef<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style" | "content">
>(
  (
    {
      headline,
      content,
      width = "default",
      style = "default",
      backgroundColor = "default",
      spaceBefore = "default",
      spaceAfter = "default",
      className,
      inverted,
      buttons = [],
      ...props
    },
    ref
  ) => {
    const { large: headlineLarge = false, ...headlineRest } = {
      ...headline,
      align: "left",
      textAlign: "left",
    };
    return (
      <SectionContextDefault
        {...props}
        className={classnames(
          style !== "default" &&
            `l-section--${
              style === "verticalGradient"
                ? "vertical-gradient"
                : style === "horizontalGradient"
                ? "horizontal-gradient"
                : style === "accentTransition"
                ? "accent-transition"
                : style === "boldTransition"
                ? "bold-transition"
                : style === "symmetricGlow"
                ? "symmetric-glow"
                : style === "anchorGlow"
                ? "anchor-glow"
                : style
            }`
        )}
        background={backgroundColor}
        content={content}
        headline={{
          ...headlineRest,
          spaceAfter: "large",
          // @ts-expect-error
          content: headlineRest.text,
          level: "h2",
          style: headlineLarge ? "h1" : "h2",
        }}
        buttons={{
          items: buttons.map((button, index) => ({
            ...button,
            variant:
              index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary",
            size: "medium",
          })),
        }}
        width={width}
        spaceBefore={spaceBefore}
        spaceAfter={spaceAfter}
        inverted={inverted}
        ref={ref}
      />
    );
  }
);

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider {...props} value={Section} />
);
