import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import { Button } from "@kickstartds/base/lib/button";
import "./section.scss";

export const Section = forwardRef<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style" | "content">
>(
  (
    {
      headline = {
        large: false,
        width: "unset",
        align: "left",
        headlineTextAlign: "left",
        switchOrder: false,
      },
      content = {
        width: "unset",
        align: "center",
        gutter: "default",
        mode: "default",
      },
      width = "default",
      style = "default",
      spaceBefore = "default",
      spaceAfter = "default",
      className,
      inverted,
      buttons = [],
      ...props
    },
    ref
  ) => {
    return (
      <>
        <SectionContextDefault
          {...props}
          headlineWidth={headline?.width}
          headlineAlign={headline?.align}
          contentWidth={content?.width}
          contentAlign={content?.align}
          // @ts-expect-error
          background={style}
          headline={
            headline
              ? {
                  className: headline?.switchOrder
                    ? "l-section__headline l-section__headline--switch-order"
                    : "l-section__headline",
                  spaceAfter: "large",
                  content: headline?.text,
                  align: headline?.textAlign,
                  // @ts-expect-error
                  text: headline?.text,
                  sub: headline?.sub,
                  style: headline?.large ? "h1" : "h2",
                }
              : undefined
          }
          width={width}
          gutter={content?.gutter}
          mode={content?.mode}
          spaceBefore={spaceBefore}
          spaceAfter={buttons && buttons.length > 0 ? "none" : spaceAfter}
          inverted={inverted}
          ref={ref}
        />
        {buttons && buttons.length > 0 && (
          <SectionContextDefault
            className={classnames(`l-section--align-${content?.align}`)}
            contentAlign={content?.align}
            // @ts-expect-error
            background={style}
            gutter={content?.gutter}
            width={width}
            mode="default"
            spaceBefore="small"
            spaceAfter={spaceAfter}
            inverted={inverted}
          >
            <div className="l-section__buttons">
              {buttons
                .filter((cta) => cta.label && cta.target)
                .map((cta, index) => (
                  <Button
                    key={index}
                    label={cta.label}
                    target={cta.target}
                    icon={cta.icon}
                    variant={
                      index === 0
                        ? "primary"
                        : index === 1
                        ? "secondary"
                        : "tertiary"
                    }
                    size="medium"
                  />
                ))}
            </div>
          </SectionContextDefault>
        )}
      </>
    );
  }
);

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider {...props} value={Section} />
);
