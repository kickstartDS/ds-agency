import { HTMLAttributes, FC, PropsWithChildren } from "react";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { SectionProps } from "./SectionProps";
import { Button } from "../button/ButtonComponent";
import "./section.scss";

export const Section: FC<SectionProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  sub,
  align,
  width = "default",
  gutter = "default",
  mode = "default",
  style = "default",
  spaceBefore = "default",
  spaceAfter = "default",
  inverted = false,
  ctas = [],
  ...props
}) => {
  return (
    <>
      <SectionContextDefault
        {...props}
        // @ts-expect-error
        background={style}
        headline={{
          text: headline,
          // @ts-expect-error
          content: !!headline,
          sub: sub,
          spaceAfter: "large",
          // @ts-expect-error
          align: align,
        }}
        width={width}
        gutter={gutter}
        mode={mode}
        spaceBefore={spaceBefore}
        spaceAfter={ctas && ctas.length > 0 ? "none" : spaceAfter}
        inverted={inverted}
      />
      {ctas && ctas.length > 0 && (
        <SectionContextDefault
          // @ts-expect-error
          background={style}
          width="default"
          gutter={gutter}
          mode="default"
          spaceBefore="small"
          spaceAfter={spaceAfter}
          inverted={inverted}
        >
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
                size="default"
              />
            ))}
        </SectionContextDefault>
      )}
    </>
  );
};

export const SectionProvider: FC<PropsWithChildren<any>> = (props) => (
  <SectionContext.Provider {...props} value={Section} />
);
