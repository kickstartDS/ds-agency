import { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { GalleryProps } from "./GalleryProps";
import "./gallery.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const Gallery: FC<GalleryProps & HTMLAttributes<HTMLElement>> = ({
  images = [],
  layout = "tiles",
}) => {
  return (
    <div className={`c-gallery`}>
      <div
        className={classnames(
          `c-gallery__grid`,
          `c-gallery__grid--${
            layout === "smallTiles"
              ? "small-tiles"
              : layout === "largeTiles"
              ? "large-tiles"
              : layout
          }`
        )}
      >
        {images.map((image, index) => (
          <div className="c-gallery__image" key={index}>
            <TextMedia
              media={[
                {
                  image: {
                    src: image.url,
                    alt: image.alt,
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
