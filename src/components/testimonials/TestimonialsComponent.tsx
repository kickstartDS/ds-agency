import { HTMLAttributes, FC } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const Testimonials: FC<
  TestimonialsProps & HTMLAttributes<HTMLElement>
> = ({ items }) => {
  return (
    <div className="c-testimonials">
      {items.map((item, index) => (
        <TextMedia
          key={index}
          mediaAlignment="beside-left"
          media={[
            {
              image: {
                src: item.image.src,
                alt: item.image.alt,
              },
            },
          ]}
          text={item.quote}
          renderText={() => (
            <>
              "{item.quote}"
              <br />
              <br />
              <b>{item.name}</b>
              <br />
              {item.title}
            </>
          )}
        />
      ))}
    </div>
  );
};
