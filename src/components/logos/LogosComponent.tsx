import { HTMLAttributes, FC } from "react";
import classnames from "classnames";

import { LogosProps } from "./LogosProps";
import "./logos.scss";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Button, Link, RichText } from "../../playroom/components";

export const Logos: FC<LogosProps & HTMLAttributes<HTMLElement>> = ({
  logos = [],
  tagline,
  align,
  cta = { style: "text" },
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
      </div>
    </>
  );
};
