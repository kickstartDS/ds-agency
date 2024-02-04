import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { TestimonialProps } from "./TestimonialProps";
import { TextMedia } from "@kickstartds/base/lib/text-media";

export const TestimonialContextDefault = forwardRef<
  HTMLDivElement,
  TestimonialProps & HTMLAttributes<HTMLDivElement>
>(({ image, quote, name, title, ...rest }, ref) => (
  <TextMedia
    {...rest}
    ref={ref}
    mediaAlignment="beside-left"
    media={[
      {
        image: {
          src: image?.src,
          alt: image?.alt,
        },
      },
    ]}
    text={quote}
    renderText={() => (
      <>
        "{quote}"
        <br />
        <br />
        <b>{name}</b>
        <br />
        {title}
      </>
    )}
  />
));

export const TestimonialContext = createContext(TestimonialContextDefault);
export const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(
  (props, ref) => {
    const Component = useContext(TestimonialContext);
    return <Component {...props} ref={ref} />;
  }
);
