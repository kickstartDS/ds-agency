import { HTMLAttributes, forwardRef, createContext, useContext } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { Testimonial } from "../testimonial/TestimonialComponent";

export type { TestimonialsProps };

export const TestimonialsContextDefault = forwardRef<
  HTMLDivElement,
  TestimonialsProps & HTMLAttributes<HTMLDivElement>
>(({ testimonial: testimonials = [], ...rest }, ref) => {
  return (
    <div {...rest} ref={ref} className="dsa-testimonials">
      {testimonials?.map((testimonial, index) => (
        <Testimonial {...testimonial} key={index} />
      ))}
    </div>
  );
});

export const TestimonialsContext = createContext(TestimonialsContextDefault);
export const Testimonials = forwardRef<
  HTMLDivElement,
  TestimonialsProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(TestimonialsContext);
  return <Component {...props} ref={ref} />;
});
Testimonials.displayName = "Testimonials";
