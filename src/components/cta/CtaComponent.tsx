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
  text,
  highlightText = false,
  buttons,
  textAlign = "left",
}) => (
  <div className={classnames("c-cta", `c-cta--align-${textAlign}`)}>
    <Headline
      level="h2"
      style={highlightText === true ? "h1" : "h2"}
      align={textAlign}
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? (
      <Text highlightText={highlightText ? true : false} text={text} />
    ) : (
      ""
    )}

    <ButtonGroup
      // @ts-expect-error
      buttons={buttons}
      arrangement={textAlign}
    />
  </div>
);
