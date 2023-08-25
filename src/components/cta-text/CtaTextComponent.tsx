import classnames from "classnames";
import { FC } from "react";
import { CtaTextProps } from "./CtaTextProps";
import React from "react";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Button } from "@kickstartds/base/lib/button";

export const CtaText: FC<CtaTextProps> = ({
  headline,
  subheadline,
  text,
  primaryCta,
  secondaryCta,
  align = "left",
}) => (
  <div className={classnames("c-cta-text", `c-cta-text--align-${align}`)}>
    <Headline
      level="h1"
      style="h1"
      align={align}
      text={headline}
      sub={subheadline}
      spaceAfter="minimal"
    />
    {text ? <RichText align={align} text={text} /> : ""}

    {primaryCta?.toggle || secondaryCta?.toggle ? (
      <div className="c-cta-text__links">
        {primaryCta?.toggle ? (
          <Button
            variant="primary"
            label={primaryCta.label}
            href={primaryCta.target}
            icon={primaryCta.icon}
          />
        ) : (
          ""
        )}
        {secondaryCta?.toggle ? (
          <Button
            variant="secondary"
            label={secondaryCta.label}
            href={secondaryCta.target}
            icon={secondaryCta.icon}
          />
        ) : (
          ""
        )}
      </div>
    ) : (
      ""
    )}
  </div>
);
