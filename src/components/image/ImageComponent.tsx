import classnames from "classnames";
import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import {
  PictureContextDefault,
  PictureContext,
} from "@kickstartds/base/lib/picture";
import { ImageProps } from "./ImageProps";
import "./image.scss";

export const Image = forwardRef<
  HTMLImageElement,
  ImageProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>(
  (
    {
      src,
      srcSet,
      alt,
      width,
      height,
      aspectRatio,
      className,
      id,
      itemProp,
      style,
      lazy,
      sources,
      pictureClassName,
      ...props
    },
    ref
  ) => (
    <PictureContextDefault
      {...props}
      src={src}
      srcSet={srcSet}
      alt={alt}
      width={width}
      height={height}
      id={id}
      itemProp={itemProp}
      style={style}
      lazy={lazy}
      sources={sources}
      pictureClassName={pictureClassName}
      ref={ref}
      className={classnames(
        "dsa-image",
        aspectRatio !== "unset" && `dsa-image--${aspectRatio}`,
        className
      )}
    />
  )
);
Image.displayName = "Image";

export const ImageProvider: FC<PropsWithChildren> = (props) => (
  <PictureContext.Provider {...props} value={Image} />
);
