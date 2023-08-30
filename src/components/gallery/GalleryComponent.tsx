import { HTMLAttributes, FC } from "react";

import { GalleryProps } from "./GalleryProps";
import "./gallery.scss";

export const Gallery: FC<GalleryProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  text,
  images,
  align,
}) => {
  return (
    <div className={`gallery ${align}`}>
      {headline && <h2>{headline}</h2>}
      {text && <p>{text}</p>}
      <div className="images">
        {images.map((image, index) => (
          <div key={index} className="image">
            <img src={image.url} alt={image.caption || ""} />
            {image.caption && <p>{image.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
