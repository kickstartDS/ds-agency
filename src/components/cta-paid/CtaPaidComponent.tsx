import { FC } from "react";
import { CtaPaidProps } from "./CtaPaidProps";
import "./cta-paid.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const CtaPaid: FC<CtaPaidProps> = ({
  headline,
  largeHeadline,
  sub,
  image,
  backgroundImage,
  backgroundColor,
  align,
  fullWidth = false,
  buttons = [],
  text,
}) => {
  const ButtonGroup = useButtonGroup();

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Storytelling
        className={classnames(
          "c-cta",
          fullWidth ? `c-cta--full-width` : "",
          image?.hAlign && image?.hAlign !== "center"
            ? `c-cta--image-h-${image?.hAlign}`
            : "",
          image?.vAlign && image?.vAlign !== "center"
            ? `c-cta--image-v-${image?.vAlign}`
            : ""
        )}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        full={image?.padding === false}
        image={{
          source: image?.src,
          order: image?.order,
        }}
        box={{
          text: text,
          textAlign: align,
          // @ts-expect-error
          link: { buttons },
          headline: {
            text: headline,
            level: "h2",
            style: largeHeadline === true ? "h1" : undefined,
            sub: sub,
            spaceAfter: largeHeadline === true ? "large" : undefined,
            align: align,
          },
        }}
      />
    </ButtonContext.Provider>
  );
};
