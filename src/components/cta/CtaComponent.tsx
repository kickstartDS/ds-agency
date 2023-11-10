import classnames from "classnames";
import { FC } from "react";
import { CtaProps } from "./CtaProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { ButtonGroup } from "@kickstartds/base/lib/button-group";
import "./cta.scss";

export const Cta: FC<CtaProps> = ({
  headline,
  sub,
  text,
  largeHeadline = true,
  buttons,
  align = "left",
}) => (
  <div className={classnames("c-cta", `c-cta--align-${align}`)}>
    <Headline
      level="h1"
      style={largeHeadline === true ? "h1" : "h2"}
      align={align}
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? <RichText text={text} /> : ""}

    <ButtonGroup buttons={buttons} arrangement={align} />
  </div>
);
