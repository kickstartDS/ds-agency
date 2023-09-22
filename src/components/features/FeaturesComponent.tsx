import { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { FeaturesProps } from "./FeaturesProps";
import "./features.scss";
import { Link } from "@kickstartds/base/lib/link";
import { Button } from "../button/ButtonComponent";
import { Icon } from "@kickstartds/base/lib/icon";

export const Features: FC<FeaturesProps & HTMLAttributes<HTMLElement>> = ({
  layout = "largeTiles",
  ctas,
  style,
  features = [],
}) => {
  return (
    <div
      className={classnames(
        `c-features c-features--${
          layout === "largeTiles"
            ? "large-tiles"
            : layout === "smallTiles"
            ? "small-tiles"
            : `${layout}`
        }`
      )}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={classnames(
            `c-feature c-feature--${
              style === `stack`
                ? `stack c-feature--large`
                : style === `besideSmall`
                ? `beside c-feature--small`
                : style === `besideLarge`
                ? `beside c-feature--large`
                : style === `intext`
                ? `intext c-feature--small`
                : style === `centered`
                ? `centered c-feature--large`
                : `${style}`
            }`
          )}
        >
          <div className="c-feature__header">
            {feature.icon && (
              <Icon className="c-feature__icon" icon={feature.icon} />
            )}
            <span className="c-feature__title">{feature.title}</span>
          </div>
          <p className="c-feature__text">
            {feature.text}
            {ctas.style === "intext" && ctas.toggle ? (
              <>
                &#32; <Link href={feature.cta.link}>{feature.cta.label}</Link>
              </>
            ) : (
              ""
            )}
          </p>
          {ctas.toggle &&
            (ctas.style === "link" || ctas.style === "button") && (
              <div className="c-feature__cta">
                {ctas.style === "link" ? (
                  <Link className="c-feature__link" href={feature.cta.link}>
                    {feature.cta.label}
                    <Icon icon="arrow-right" />
                  </Link>
                ) : ctas.style === "button" ? (
                  <Button
                    className="c-feature__button"
                    size="small"
                    target={feature.cta.link}
                    label={feature.cta.label}
                  />
                ) : (
                  ""
                )}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};
