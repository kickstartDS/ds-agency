import { FC } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import { HeroProps } from "./HeroProps";
import classnames from "classnames";
import "./hero.scss";
import { Container } from "@kickstartds/core/lib/container";

export const Hero: FC<HeroProps> = ({
  headline,
  sub,
  height,
  text,
  textPosition = "center",
  image,
  textbox,
  cta,
}) => (
  <Container name="visual">
    <VisualContextDefault
      className={classnames(`c-hero c-hero--content-${textPosition}`)}
      renderBox={() => <>test</>}
      height={height}
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
          label: cta.label,
          href: cta.target,
          enabled: cta.toggle,
          // @ts-expect-error
          variant: "secondary",
        },
        renderHeadline: () => <>{headline}</>,
        headline: {
          // @ts-expect-error
          text: headline,
          sub: sub,
          style: "h1",
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
);
