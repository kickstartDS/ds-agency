import { HTMLAttributes, FC } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const Testimonials: FC<
  TestimonialsProps & HTMLAttributes<HTMLElement>
> = ({ testimonials }) => {
  return (
    <div className="c-testimonials">
      {testimonials.map((testimonial, index) => (
        <TextMedia
          key={index}
          mediaAlignment="beside-left"
          media={[
            {
              image: {
                src: testimonial.image.src,
                alt: testimonial.image.alt,
              },
            },
          ]}
          text={testimonial.quote}
          renderText={() => (
            <>
              "{testimonial.quote}"
              <br />
              <br />
              <b>{testimonial.name}</b>
              <br />
              {testimonial.title}
            </>
          )}
        />
      ))}
    </div>
  );
};
