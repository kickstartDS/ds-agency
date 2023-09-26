import { HTMLAttributes, FC } from "react";

import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { QuotesSlider } from "@kickstartds/content/lib/quotes-slider";

export const TestimonialsPaid: FC<
  TestimonialsProps & HTMLAttributes<HTMLElement>
> = ({ testimonials }) => {
  return (
    <div className="c-testimonials">
      <QuotesSlider
        slides={testimonials.map((testimonial, index) => ({
          key: index,
          text: testimonial.quote,
          source: testimonial.name,
          byline: testimonial.title,
          image: testimonial.image.src,
          renderSource: () => (
            <>
              {testimonial.rating &&
                (testimonial.rating ? (
                  <div>
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                ) : (
                  ""
                ))}
              <div className="c-quote__source">{testimonial.name}</div>
            </>
          ),
        }))}
      />
    </div>
  );
};
