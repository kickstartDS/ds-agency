import { FC } from "react";
import { Visual as VisualComponent } from "@kickstartds/content/lib/visual";
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
        // @ts-expect-error
        text: headline,
        sub: sub,
        style: "h1",
      },
      text: text,
    }}
    media={media}
  />
);
