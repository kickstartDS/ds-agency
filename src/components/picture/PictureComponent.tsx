import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import {
  PictureContextDefault,
  PictureContext,
} from "@kickstartds/base/lib/picture";
import { PictureProps } from "./PictureProps";
export const Picture = forwardRef<
  HTMLImageElement,
  PictureProps & HTMLAttributes<HTMLElement>
>(
  (
    {
      src,
      srcSet,
      alt,
      width,
      height,
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
      className={className}
      id={id}
      itemProp={itemProp}
      style={style}
      lazy={lazy}
      sources={sources}
      pictureClassName={pictureClassName}
      ref={ref}
    />
  )
);

export const PictureProvider: FC<PropsWithChildren> = (props) => (
  <PictureContext.Provider {...props} value={Picture} />
);
