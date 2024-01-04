import { FC } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import classnames from "classnames";
import { VideoCurtainProps } from "./VideoCurtainProps";
import "./video-curtain.scss";
import { Container } from "@kickstartds/core/lib/container";
import { ButtonContext } from "@kickstartds/base/lib/button";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const VideoCurtain: FC<VideoCurtainProps> = ({
  headline,
  sub,
  text,
  highlightText,
  colorNeutral,
  textPosition,
  overlay,
  video,
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
          skipButton
          className={classnames(
            `c-video-curtain`,
            highlightText ? `c-video-curtain--highlight-text` : "",
            colorNeutral ? `c-video-curtain--color-neutral` : ""
          )}
          height="fullScreen"
          inbox
          box={{
            background: "transparent",
            enabled: true,
            vertical: "center",
            horizontal: textPosition,
            link: {
              // @ts-expect-error
              buttons,
              colorNeutral,
              enabled: buttons.length > 0,
              arrangement: textPosition === "center" ? "center" : "left",
            },
            headline: {
              text: headline,
              level: "h1",
              sub: sub,
              style: highlightText ? "h1" : undefined,
              align: textPosition === "center" ? "center" : "left",
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
    </ButtonContext.Provider>
  );
};
