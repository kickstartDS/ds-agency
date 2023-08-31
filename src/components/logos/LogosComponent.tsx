import { HTMLAttributes, FC } from "react";

import { LogosProps } from "./LogosProps";
import "./logos.scss";

export const Logos: FC<LogosProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  headlineAlign,
  logos = [],
  logosPerRow,
  ctaText,
}) => {
  return (
    <div className={`logos ${headlineAlign}`}>
      {headline && <h2>{headline}</h2>}
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo">
            <img src={logo.url} alt={logo.caption || ""} />
            {logo.caption && <p>{logo.caption}</p>}
          </div>
        ))}
      </div>
      {ctaText && <p>{ctaText}</p>}
    </div>
  );
};
