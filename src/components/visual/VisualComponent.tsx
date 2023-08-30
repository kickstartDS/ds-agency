import classnames from "classnames";
import { FC } from "react";
import React from "react";
import { Visual as VisualComponent } from "@kickstartds/content/lib/visual";
import { VisualProps } from "./VisualProps";

export const Visual: FC<VisualProps> = ({
  headline,
  text,
  primaryCta,
  secondaryCta,
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
        style: "h1",
      },
      text: text,
    }}
    media={media}
  />
);
