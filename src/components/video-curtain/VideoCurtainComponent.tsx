import { FC } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import { VideoCurtainProps } from "./VideoCurtainProps";
import "./video-curtain.scss";
import { Container } from "@kickstartds/core/lib/container";

export const VideoCurtain: FC<VideoCurtainProps> = ({
  headline,
  sub,
  largeHeadline = true,
  text,
  textPosition,
  overlay,
  video,
  cta,
}) => (
  <Container name="visual">
    <VisualContextDefault
      className="c-video-curtain"
      height="fullScreen"
      inbox
      box={{
        background: "transparent",
        enabled: true,
        vertical: "center",
        horizontal: textPosition,
        link: {
          label: cta.label,
          href: cta.target,
          enabled: cta.toggle,
          // @ts-expect-error
          variant: "secondary",
        },
        headline: {
          // @ts-expect-error
          text: headline,
          sub: sub,
          style: largeHeadline ? "h1" : undefined,
        },
        text: text,
      }}
      overlay={overlay}
      media={{
        mode: "video",
        video: {
          srcMobile: video.srcMobile,
          srcTablet: video.srcTablet,
          srcDesktop: video.srcDesktop,
        },
      }}
    />
  </Container>
);
