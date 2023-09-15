import { HTMLAttributes, FC } from "react";

import { GalleryProps } from "./GalleryProps";
import "./gallery.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const Gallery: FC<GalleryProps & HTMLAttributes<HTMLElement>> = ({
  images = [],
  align = "tiles",
}) => {
  return (
    <div className={`c-gallery`}>
      <div className={`c-gallery__grid c-gallery__grid--align-${align}`}>
        {images.map((image, index) => (
          <div className="c-gallery__image" key={index}>
            <TextMedia
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
