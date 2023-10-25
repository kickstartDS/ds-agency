import { FC, useContext } from "react";
import { VisualContextDefault } from "@kickstartds/content/lib/visual";
import { VideoCurtainProps } from "./VideoCurtainProps";
import "./video-curtain.scss";
import { Container } from "@kickstartds/core/lib/container";
import { ButtonContext } from "@kickstartds/base/lib/button";

export const VideoCurtain: FC<VideoCurtainProps> = ({
  headline,
  sub,
  largeHeadline = true,
  text,
  textPosition,
  overlay,
  video,
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
              icon={button?.icon}
              target={button.target}
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
          className="c-video-curtain"
          height="fullScreen"
          inbox
          box={{
            background: "transparent",
            enabled: true,
            vertical: "center",
            horizontal: textPosition,
            // @ts-expect-error
            link: { buttons, enabled: buttons.length > 0 },
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
    </ButtonContext.Provider>
  );
};
