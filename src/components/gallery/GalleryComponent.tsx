import { HTMLAttributes, FC } from "react";

import { GalleryProps } from "./GalleryProps";
import "./gallery.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Headline } from "../headline/HeadlineComponent";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Gallery: FC<GalleryProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  text,
  images,
  align = "tiles",
}) => {
  return (
    <div className={`c-gallery`}>
      {headline && <Headline align="left" level="h2" text={headline} />}
      {text && <RichText text={text} />}
      <div className={`c-gallery__grid c-gallery__grid--align-${align}`}>
        {images.map((image, index) => (
          <div className="c-gallery__image">
            <TextMedia
              key={index}
              media={[
                {
                  image: {
                    src: image.url,
                    alt: image.caption || "",
                  },
                  caption: image.caption,
                },
              ]}
              text={undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
