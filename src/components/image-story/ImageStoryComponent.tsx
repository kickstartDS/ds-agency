import { FC, useContext } from "react";
import { ImageStoryProps } from "./ImageStoryProps";
import "./image-story.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";

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
  const Button = useContext(ButtonContext);
  const ButtonGroup = ({ buttons: buttons }) => {
    return buttons.length ? (
      <div className="c-image-story__links">
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
      </div>
    ) : null;
  };

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
