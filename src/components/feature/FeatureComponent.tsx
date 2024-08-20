import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { Button } from "../button/ButtonComponent";
import { FeatureProps } from "./FeatureProps";
import { Link } from "@kickstartds/base/lib/link";

export const FeatureContextDefault = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>(
  (
    {
      style = "stack",
      title,
      text,
      icon,
      cta: {
        toggle = true,
        style: ctaStyle = "link",
        target,
        label = "Read more",
      },
      ...rest
    },
    ref
  ) => (
    <div
      {...rest}
      ref={ref}
      className={classnames(
        `dsa-feature dsa-feature--${
          style === `stack`
            ? `stack dsa-feature--large`
            : style === `besideSmall`
            ? `beside dsa-feature--small`
            : style === `besideLarge`
            ? `beside dsa-feature--large`
            : style === `intext`
            ? `intext dsa-feature--small`
            : style === `centered`
            ? `centered dsa-feature--large`
            : `${style}`
        }`
      )}
    >
      <div className="dsa-feature__header">
        {icon && <Icon className="dsa-feature__icon" icon={icon} />}
        <span className="dsa-feature__title">{title}</span>
      </div>
      {text || ctaStyle === "intext" ? (
        <p className="dsa-feature__text">
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
        <div className="dsa-feature__cta">
          {ctaStyle === "link" ? (
            <Link className="dsa-feature__link" href={target}>
              {label ? label : "See more"}
              <Icon icon="arrow-right" />
            </Link>
          ) : ctaStyle === "button" ? (
            <Button
              className="dsa-feature__button"
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
  )
);

export const FeatureContext = createContext(FeatureContextDefault);
export const Feature = forwardRef<
  HTMLDivElement,
  FeatureProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>((props, ref) => {
  const Component = useContext(FeatureContext);
  return <Component {...props} ref={ref} />;
});
Feature.displayName = "Feature";
