import { FC } from "react";
import { CtaTextProps } from "./CtaTextProps";
import React from "react";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Button } from "@kickstartds/base/lib/button";

export const CtaText: FC<CtaTextProps> = ({
  ctaToggle,
  ctaLabel,
  ctaTarget,
  headline,
  subheadline,
  text,
  align,
}) => (
  <div className="c-cta-text">
    <Headline
      level="h1"
      style="h1"
      text={headline}
      sub={subheadline}
      spaceAfter="minimal"
    />
    <RichText text={text} />
    {ctaToggle ? (
      <Button variant="primary" label={ctaLabel} href={ctaTarget} />
    ) : (
      ""
    )}
  </div>
);
