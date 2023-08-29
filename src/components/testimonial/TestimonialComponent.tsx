import { HTMLAttributes, FC } from "react";

import { TestimonialProps } from "./TestimonialProps";
import "./testimonial.scss";

export const Testimonial: FC<
  TestimonialProps & HTMLAttributes<HTMLElement>
> = ({ quote, name, title, image, rating }) => {
  return (
    <div>
      <blockquote>{quote}</blockquote>
      {name && <p>{name}</p>}
      {title && <p>{title}</p>}
      {image && <img src={image} alt="Author" />}
      {rating && (
        <div>
          {[...Array(rating)].map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      )}
    </div>
  );
};
