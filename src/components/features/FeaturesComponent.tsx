import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { FeaturesProps } from "./FeaturesProps";
import "./features.scss";
import { Feature } from "../feature/FeatureComponent";

export type { FeaturesProps };

export const FeaturesContextDefault = forwardRef<
  HTMLDivElement,
  FeaturesProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>(
  (
    {
      layout = "largeTiles",
      ctas = {
        style: "link",
        toggle: true,
      },
      style = "intext",
      feature: features = [],
      ...rest
    },
    ref
  ) => (
    <div
      {...rest}
      ref={ref}
      className={classnames(
        `dsa-features dsa-features--${
          layout === "largeTiles"
            ? "large-tiles"
            : layout === "smallTiles"
            ? "small-tiles"
            : `${layout}`
        }`
      )}
    >
      {features.map((feature, index) => {
        const { icon, title, text, cta, ...rest } = feature;

        return (
          <Feature
            {...rest}
            key={index}
            icon={icon}
            style={style}
            title={title}
            text={text}
            cta={{
              label: cta?.label,
              target: cta?.target,
              style: ctas.style,
              toggle: ctas.toggle,
            }}
          />
        );
      })}
    </div>
  )
);

export const FeaturesContext = createContext(FeaturesContextDefault);
export const Features = forwardRef<
  HTMLDivElement,
  FeaturesProps & Omit<HTMLAttributes<HTMLDivElement>, "style">
>((props, ref) => {
  const Component = useContext(FeaturesContext);
  return <Component {...props} ref={ref} />;
});
Features.displayName = "Features";
