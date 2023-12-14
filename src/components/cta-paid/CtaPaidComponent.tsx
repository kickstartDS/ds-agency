import { FC } from "react";
import { CtaPaidProps } from "./CtaPaidProps";
import "./cta-paid.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const CtaPaid: FC<CtaPaidProps> = ({
  headline,
  highlightText = false,
  sub,
  image,
  text,
  textAlign,
  backgroundImage,
  backgroundColor,
  colorNeutral,
  contentAlign,
  order,
  fullWidth = false,
  buttons = [],
}) => {
  const ButtonGroup = useButtonGroup();

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Storytelling
        className={classnames(
          "c-cta-paid",
          fullWidth ? `c-cta-paid--full-width` : "",
          highlightText ? `c-cta-paid--highlight-text` : "",
          colorNeutral ? `c-cta-paid--color-neutral` : "",
          contentAlign && contentAlign !== "center"
            ? `c-cta-paid--align-${contentAlign}`
            : ""
        )}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        full={image?.padding === false}
        image={{
          source: image?.src,
          order: order,
        }}
        box={{
          text: text,
          textAlign: textAlign,
          link: {
            // @ts-expect-error
            buttons,
            colorNeutral: colorNeutral,
            enabled: buttons.length > 0,
          },
          headline: {
            text: headline,
            level: "h2",
            style: highlightText === true ? "h1" : undefined,
            sub: sub,
            spaceAfter: highlightText === true ? "large" : undefined,
            align: textAlign,
          },
        }}
      />
    </ButtonContext.Provider>
  );
};
