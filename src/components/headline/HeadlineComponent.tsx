import classnames from "classnames";
import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";

import ReactMarkdown from "react-markdown";

import { HeadlineContext } from "@kickstartds/base/lib/headline";
import { defaultRenderFn } from "@kickstartds/core/lib/core";

import { HeadlineProps } from "./HeadlineProps";
import "./headline.scss";

const markdownRenderFn = (text: string) => (
  <ReactMarkdown children={text} components={{ p: "span" }} />
);

interface RenderFunctions {
  renderContent?: typeof defaultRenderFn;
  renderSubheadline?: typeof defaultRenderFn;
}

export const Headline = forwardRef<
  HTMLElement,
  HeadlineProps & RenderFunctions & HTMLAttributes<HTMLElement>
>(
  (
    {
      text,
      sub,
      align = "left",
      switchOrder = false,
      level = "h2",
      // @ts-expect-error: Some kDS Components set the `styleAs`Props (e.g. https://github.com/kickstartDS/content/blob/next/source/storytelling/StorytellingComponent.tsx#L146)
      styleAs,
      style = styleAs || "h2",
      spaceAfter = "small",
      className,
      renderContent = markdownRenderFn,
      renderSubheadline = markdownRenderFn,
      ...props
    },
    ref
  ) => {
    const TagName = level;
    return text || sub ? (
      <header
        className={classnames(
          "c-headline",
          `c-headline--${style}`,
          style !== "none" && style !== level && `c-headline--${style}`,
          `c-headline--align-${align}`,
          spaceAfter && `c-headline--space-after-${spaceAfter}`,
          className
        )}
        ref={ref}
        {...props}
      >
        {sub && switchOrder && (
          <p className="c-headline__subheadline">{renderSubheadline(sub)}</p>
        )}
        <TagName className={classnames("c-headline__headline")}>
          {renderContent(text)}
        </TagName>
        {sub && !switchOrder && (
          <p className="c-headline__subheadline">{renderSubheadline(sub)}</p>
        )}
      </header>
    ) : null;
  }
);

export const HeadlineProvider: FC<PropsWithChildren> = (props) => (
  <HeadlineContext.Provider {...props} value={Headline} />
);
