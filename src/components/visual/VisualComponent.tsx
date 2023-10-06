import { FC } from "react";
import { VisualContextDefault as VisualComponent } from "@kickstartds/content/lib/visual";
import { VisualProps } from "./VisualProps";
import "./visual.scss";

export const Visual: FC<VisualProps> = ({
  headline,
  sub,
  text,
  align,
  media,
}) => (
  <VisualComponent
    height="fullScreen"
    box={{
      background: "transparent",
      enabled: true,
      horizontal: align,
      headline: {
        content: headline,
        subheadline: sub,
        styleAs: "h1",
      },
      text: text,
    }}
    media={{
      mode: "video",
      video: {
        srcMobile: media.video.srcMobile,
        srcTablet: media.video.srcTablet,
        srcDesktop: media.video.srcDesktop,
      },
    }}
  />
);
