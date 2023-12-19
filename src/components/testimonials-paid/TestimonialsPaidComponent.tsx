import { HTMLAttributes, FC, PropsWithChildren } from "react";
import { TestimonialsPaidProps } from "./TestimonialsPaidProps";
import "./testimonials-paid.scss";
import { Quote } from "@kickstartds/content/lib/quote";
import { Slider } from "../slider/SliderComponent";
import { SliderProps } from "../slider/SliderProps";

interface ConditionalSliderProps extends SliderProps {
  layout: "slider" | "list" | "alternating";
}

export const ConditionalSlider: FC<
  PropsWithChildren<ConditionalSliderProps>
> = ({ layout, children, ...props }) => {
  if (layout === "slider") {
    return (
      <Slider className="c-testimonials c-testimonials--slider" {...props}>
        {children}
      </Slider>
    );
  } else {
    return (
      <div className="c-testimonials c-testimonials--list" {...props}>
        {children}
      </div>
    );
  }
};

export const TestimonialsPaid: FC<
  TestimonialsPaidProps & HTMLAttributes<HTMLElement>
> = ({ testimonials, layout = "slider", ...props }) => {
  return (
    <ConditionalSlider layout={layout} arrows nav {...props}>
      {testimonials.map((testimonial, index) => (
        <Quote
          className={
            layout === "alternating" && index % 2 === 1
              ? "c-quote--reverse"
              : ""
          }
          key={index}
          text={testimonial.quote}
          source={testimonial.name}
          byline={testimonial.title}
          image={testimonial.image.src}
          renderSource={() => (
            <>
              {testimonial?.rating &&
                (testimonial?.rating ? (
                  <div>
                    {[...Array(testimonial?.rating)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                ) : (
                  ""
                ))}
              <div className="c-quote__source">{testimonial.name}</div>
            </>
          )}
        />
      ))}
    </ConditionalSlider>
  );
};
