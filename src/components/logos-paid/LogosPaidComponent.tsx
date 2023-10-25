import { HTMLAttributes, FC } from "react";
import classnames from "classnames";

import { LogosPaidProps } from "./LogosPaidProps";
import "./logos-paid.scss";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Button } from "@kickstartds/base/lib/button";
import { Link } from "@kickstartds/base/lib/link";

export const LogosPaid: FC<LogosPaidProps & HTMLAttributes<HTMLElement>> = ({
  logos = [],
  tagline,
  align,
  cta,
  logosPerRow = "6",
}) => {
  return (
    <>
      <div className={classnames(`c-logos c-logos--align-${align}`)}>
        <div className="c-logos__tagline">{tagline}</div>
        <LogoTiles
          className={classnames(`c-logo-tiles--cols-${logosPerRow}`)}
          logos={logos}
        />
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
    </>
  );
};
