import { FC, useContext } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import { HeroProps } from "./HeroProps";
import classnames from "classnames";
import "./hero.scss";
import { Container } from "@kickstartds/core/lib/container";
import { ButtonContext } from "@kickstartds/base/lib/button";

export const Hero: FC<HeroProps> = ({
  headline,
  sub,
  largeHeadline,
  height,
  text,
  textPosition = "center",
  image,
  overlay,
  textbox,
  buttons = [],
}) => {
  const Button = useContext(ButtonContext);
  const ButtonGroup = ({ buttons: buttons }) => {
    return buttons.length ? (
      <>
        {buttons.map((button, index) =>
          button.label ? (
            <Button
              variant={
                index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary"
              }
              label={button.label}
              target={button.target}
              icon={button?.icon}
              key={index}
            />
          ) : (
            ""
          )
        )}
      </>
    ) : null;
  };

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Container name="visual">
        <VisualContextDefault
          className={classnames(`c-hero c-hero--content-${textPosition}`)}
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
            // @ts-expect-error
            link: { buttons, enabled: buttons.length > 0 },
            headline: {
              align:
                textPosition === "below" || textPosition === "center"
                  ? "center"
                  : "left",
              // @ts-expect-error
              text: headline,
              sub: sub,
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
