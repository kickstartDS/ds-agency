import { HTMLAttributes, FC } from "react";
import { TestimonialProps } from "./TestimonialProps";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const Testimonial: FC<TestimonialProps & HTMLAttributes<HTMLElement>> = (
  testimonial
) => {
  return (
    <TextMedia
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
  );
};
