import { FC } from "react";
import { CtaPaidProps } from "./CtaPaidProps";
import "./cta-paid.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const CtaPaid: FC<CtaPaidProps> = ({
  headline,
  largeHeadline = false,
  sub,
  image,
  text,
  highlightText = false,
  textAlign,
  backgroundImage,
  backgroundColor,
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
          // @ts-expect-error
          link: { buttons },
          headline: {
            text: headline,
            level: "h2",
            style: largeHeadline === true ? "h1" : undefined,
            sub: sub,
            spaceAfter: largeHeadline === true ? "large" : undefined,
            align: textAlign,
          },
        }}
      />
    </ButtonContext.Provider>
  );
};
