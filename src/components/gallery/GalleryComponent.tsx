import {
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  useMemo,
} from "react";
import classnames from "classnames";
import { GalleryProps } from "./GalleryProps";
import "./gallery.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const GalleryContextDefault = forwardRef<
  HTMLDivElement,
  GalleryProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      lightbox = false,
      layout = "tiles",
      aspectRatio = "square",
      images = [],
      ...rest
    },
    ref
  ) => {
    const galleryId = useMemo(() => `gallery-${Date.now()}`, []);

    return (
      <div {...rest} ref={ref} className={`c-gallery`}>
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
            <div
              className={classnames(
                "c-gallery__image",
                aspectRatio !== "unset" && `c-gallery__image--${aspectRatio}`
              )}
              key={index}
            >
              <TextMedia
                media={[
                  {
                    ...(lightbox && {
                      lightboxImage: {
                        thumb: image.src,
                        image: image.src,
                        alt: image.alt,
                        gallery: galleryId,
                      },
                    }),
                    ...(lightbox === false && {
                      image: {
                        src: image.src,
                        alt: image.alt,
                        gallery: galleryId,
                      },
                    }),
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
  }
);

export const GalleryContext = createContext(GalleryContextDefault);
export const Gallery = forwardRef<
  HTMLDivElement,
  GalleryProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(GalleryContext);
  return <Component {...props} ref={ref} />;
});
