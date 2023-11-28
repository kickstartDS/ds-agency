import { FC } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import { HeroProps } from "./HeroProps";
import classnames from "classnames";
import "./hero.scss";
import { Container } from "@kickstartds/core/lib/container";
import { ButtonContext } from "@kickstartds/base/lib/button";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const Hero: FC<HeroProps> = ({
  headline,
  sub,
  largeHeadline,
  height,
  text,
  highlightText,
  textPosition = "center",
  image,
  overlay,
  textbox,
  buttons = [],
}) => {
  const ButtonGroup = useButtonGroup();

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Container name="visual">
        <VisualContextDefault
          className={classnames(
            `c-hero c-hero--content-${textPosition}`,
            highlightText ? `c-hero--highlight-text` : ""
          )}
          height={height}
          overlay={overlay}
          box={{
            background: textbox === true ? "solid" : "transparent",
            enabled: true,
            vertical: textPosition === "below" ? "bottom" : "center",
            horizontal:
              textPosition === "left"
                ? "left"
                : textPosition === "right"
                ? "right"
                : "center",
            link: {
              // @ts-expect-error
              buttons,
              enabled: buttons.length > 0,
              arrangement:
                textPosition === "below" || textPosition === "center"
                  ? "center"
                  : "left",
            },
            headline: {
              align:
                textPosition === "below" || textPosition === "center"
                  ? "center"
                  : "left",
              text: headline,
              sub: sub,
              level: "h3",
              style: largeHeadline ? "h1" : undefined,
            },
            text: text,
          }}
          media={{
            mode: "image",
            image: {
              srcMobile: image.srcMobile,
              srcTablet: image.srcTablet,
              srcDesktop: image.srcDesktop,
            },
          }}
        />
      </Container>
    </ButtonContext.Provider>
  );
};
