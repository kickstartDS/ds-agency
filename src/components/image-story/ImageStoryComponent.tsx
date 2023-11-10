import { FC } from "react";
import { ImageStoryProps } from "./ImageStoryProps";
import "./image-story.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";
import { useButtonGroup } from "../button-group/ButtonGroupComponent";

export const ImageStory: FC<ImageStoryProps> = ({
  headline,
  largeHeadline = false,
  sub,
  image,
  padding = false,
  textAlign = "left",
  layout = "textLeft",
  buttons = [],
  text,
}) => {
  const ButtonGroup = useButtonGroup();

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Storytelling
        className={classnames("c-image-story")}
        full={padding === false ? true : false}
        image={{
          source: image?.src,
          order: {
            desktopImageLast: layout === "imageLeft" ? false : true,
          },
          vAlign: "top",
        }}
        box={{
          text: text,
          textAlign: textAlign,
          vAlign: "top",
          // @ts-expect-error
          link: { buttons },
          headline: {
            text: headline,
            level: "h2",
            style: largeHeadline === true ? "h1" : undefined,
            sub: sub,
            spaceAfter: largeHeadline === true ? "large" : undefined,
            align: textAlign,
          },
        }}
      />
    </ButtonContext.Provider>
  );
};
