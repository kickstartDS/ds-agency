import { HTMLAttributes, FC } from "react";

import { TestimonialProps } from "./TestimonialProps";
import "./testimonial.scss";
import { Quote } from "@kickstartds/content/lib/quote";

export const Testimonial: FC<
  TestimonialProps & HTMLAttributes<HTMLElement>
> = ({ quote, name, title, image, rating }) => {
  return (
    <>
      <Quote
        source={name}
        byline={title}
        image={image}
        text={quote}
        renderSource={() => (
          <>
            {rating &&
              (rating ? (
                <div>
                  {[...Array(rating)].map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              ) : (
                ""
              ))}
            <div className="c-quote__source">John Doe</div>
          </>
        )}
      />
    </>
  );
};
