import classnames from "classnames";
import { FC } from "react";
import { CtaProps } from "./CtaProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { Text } from "../text/TextComponent";
import { ButtonGroup } from "@kickstartds/base/lib/button-group";
import "./cta.scss";

export const Cta: FC<CtaProps> = ({
  headline,
  sub,
  largeHeadline = false,
  text,
  highlightText = false,
  buttons,
  textAlign = "left",
}) => (
  <div className={classnames("c-cta", `c-cta--align-${textAlign}`)}>
    <Headline
      level="h2"
      style={largeHeadline === true ? "h1" : "h2"}
      align={textAlign}
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? <Text highlight={highlightText ? true : false} text={text} /> : ""}

    <ButtonGroup buttons={buttons} arrangement={textAlign} />
  </div>
);
