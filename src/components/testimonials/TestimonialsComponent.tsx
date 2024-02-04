import { HTMLAttributes, FC } from "react";
import { TestimonialsProps } from "./TestimonialsProps";
import "./testimonials.scss";
import { Testimonial } from "../testimonial/TestimonialComponent";

export const Testimonials: FC<
  TestimonialsProps & HTMLAttributes<HTMLElement>
> = ({ testimonial: testimonials = [] }) => {
  return (
    <div className="c-testimonials">
      {testimonials?.map((testimonial, index) => (
        <Testimonial {...testimonial} key={index} />
      ))}
    </div>
  );
};
