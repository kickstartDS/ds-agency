import { FC } from "react";
import { VisualContextDefault as VisualComponent } from "@kickstartds/content/lib/visual";
import { VideoCurtainProps } from "./VideoCurtainProps";
import "../visual/visual.scss";
import { Container } from "@kickstartds/core/lib/container";

export const VideoCurtain: FC<VideoCurtainProps> = ({
  headline,
  sub,
  text,
  horizontalAlign,
  verticalAlign,
  overlay,
  video,
  cta,
}) => (
  <Container name="visual">
    <VisualComponent
      className="c-video-curtain"
      height="fullScreen"
      inbox
      box={{
        background: "transparent",
        enabled: true,
        horizontal: horizontalAlign,
        vertical: verticalAlign,
        link: {
          label: cta.label,
          target: cta.target,
          enabled: cta.toggle,
          variant: "secondary",
        },
        headline: {
          text: headline,
          sub: sub,
          styleAs: "h1",
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
