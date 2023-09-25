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
  SectionProps & Omit<HTMLAttributes<HTMLElement>, "style">
>(
  (
    {
      headline,
      sub,
      align = "left",
      width = "default",
      gutter = "default",
      mode = "default",
      style = "default",
      spaceBefore = "default",
      spaceAfter = "default",
      className,
      inverted = false,
      switchHeadlineOrder = false,
      ctas = [],
      ...props
    },
    ref
  ) => {
    return (
      <>
        <SectionContextDefault
          {...props}
          background={style}
          headline={
            headline
              ? {
                  content: headline,
                  // @ts-expect-error
                  text: headline,
                  subheadline: sub,
                }
              : undefined
          }
          className={classnames(`l-section--align-${align}`)}
          width={width}
          gutter={gutter}
          mode={mode}
          spaceBefore={spaceBefore}
          spaceAfter={ctas && ctas.length > 0 ? "none" : spaceAfter}
          inverted={inverted}
          ref={ref}
        />
        {ctas && ctas.length > 0 && (
          <SectionContextDefault
            className={classnames(`l-section--align-${align}`)}
            background={style}
            width={width}
            gutter={gutter}
            mode="default"
            spaceBefore="small"
            spaceAfter={spaceAfter}
            inverted={inverted}
          >
            <div className="l-section__ctas">
              {ctas
                .filter((cta) => cta.label && cta.target)
                .map((cta, index) => (
                  <Button
                    key={index}
                    label={cta.label}
                    target={cta.target}
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
