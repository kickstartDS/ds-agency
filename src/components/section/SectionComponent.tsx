import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import "./section.scss";
import { identifier as spotlightIdentifier } from "./js/spotlight.client";

export const Section = forwardRef<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style" | "content">
>(
  (
    {
      headline,
      content,
      headerSpacing,
      width = "default",
      style = "default",
      spotlight = false,
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
      align: "left",
      ...headline,
    };
    return (
      <SectionContextDefault
        {...props}
        ks-component={spotlight ? spotlightIdentifier : undefined}
        className={classnames(
          style !== "default" &&
            `l-section-style--${
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
            }`,
          headerSpacing && "l-section--header-spacing",
          spotlight && "l-section--spotlight",
          className
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
          buttons,
          // @ts-expect-error
          items: buttons,
        }}
        width={width}
        spaceBefore={spaceBefore}
        spaceAfter={spaceAfter}
        inverted={inverted}
        ref={ref}
      >
        {props.children}
      </SectionContextDefault>
    );
  }
);

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider {...props} value={Section} />
);
