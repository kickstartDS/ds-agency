import { HTMLAttributes, FC } from "react";
import classnames from "classnames";

import { LogosProps } from "./LogosProps";
import "./logos.scss";
import { Button } from "@kickstartds/base/lib/button";
import { Link } from "@kickstartds/base/lib/link";
import { Container } from "@kickstartds/core/lib/container";
import { Logo } from "../logo/LogoComponent";

export const Logos: FC<LogosProps & HTMLAttributes<HTMLElement>> = ({
  logo: logos = [],
  tagline,
  align,
  cta,
}) => {
  return (
    <>
      <Container name="logo-tiles">
        <div className={classnames(`c-logos c-logos--align-${align}`)}>
          <div className="c-logos__tagline">{tagline}</div>
          <div className="c-logos__grid">
            {logos.map((logo, index) => (
              <Logo {...logo} key={index} />
            ))}
          </div>
          {cta?.toggle ? (
            <div className="c-logos__cta">
              <div className="c-logos__cta__text">
                {cta?.text}
                {cta?.style === "text" ? (
                  <>
                    &#32;
                    <Link className="c-logos__cta__link" href={cta.link}>
                      {cta.label}
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </div>
              {cta?.style === "button" ? (
                <Button href={cta.link} label={cta.label} />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};
