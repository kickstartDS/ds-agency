import classnames from "classnames";
import { FC } from "react";
import { CtaProps } from "./CtaProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Button } from "@kickstartds/base/lib/button";
import "./cta.scss";

export const Cta: FC<CtaProps> = ({
  headline,
  sub,
  text,
  primaryCta,
  secondaryCta,
  align = "left",
}) => (
  <div className={classnames("c-cta", `c-cta--align-${align}`)}>
    <Headline
      level="h1"
      style="h1"
      align={align}
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? <RichText text={text} /> : ""}
    {primaryCta?.toggle || secondaryCta?.toggle ? (
      <div className="c-cta__links">
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
