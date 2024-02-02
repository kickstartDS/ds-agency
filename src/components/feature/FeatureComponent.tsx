import { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";
import { FeatureProps } from "./FeatureProps";
import { Link } from "@kickstartds/base/lib/link";

export const Feature: FC<FeatureProps & HTMLAttributes<HTMLElement>> = ({
  style = "stack",
  title,
  text,
  icon,
  cta: { toggle = true, style: ctaStyle = "link", target, label = "Read more" },
}) => {
  return (
    <div
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
        {icon && <Icon className="c-feature__icon" icon={icon} />}
        <span className="c-feature__title">{title}</span>
      </div>
      {text || ctaStyle === "intext" ? (
        <p className="c-feature__text">
          {text}
          {ctaStyle === "intext" && toggle ? (
            <>
              &#32; <Link href={target}>{label ? label : "See more"}</Link>
            </>
          ) : (
            ""
          )}
        </p>
      ) : (
        ""
      )}

      {toggle && (ctaStyle === "link" || ctaStyle === "button") && (
        <div className="c-feature__cta">
          {ctaStyle === "link" ? (
            <Link className="c-feature__link" href={target}>
              {label ? label : "See more"}
              <Icon icon="arrow-right" />
            </Link>
          ) : ctaStyle === "button" ? (
            <Button
              className="c-feature__button"
              size="small"
              target={target}
              label={label ? label : "See more"}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
