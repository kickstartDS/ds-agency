import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { FeaturesProps } from "./FeaturesProps";
import "./features.scss";
import { Feature } from "../feature/FeatureComponent";

export const FeaturesContextDefault = forwardRef<
  HTMLDivElement,
  FeaturesProps & HTMLAttributes<HTMLDivElement>
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
        <Feature
          key={index}
          title={feature.title}
          text={feature.text}
          style={
            style === "intext"
              ? "intext"
              : style === "stack"
              ? "stack"
              : style === "centered"
              ? "centered"
              : style === "besideLarge"
              ? "besideLarge"
              : style === "besideSmall"
              ? "besideSmall"
              : undefined
          }
          icon={feature?.icon}
          cta={{
            label: feature?.cta?.label,
            target: feature?.cta?.target,
            toggle: ctas?.toggle,
            style: ctas?.style,
          }}
        />
      ))}
    </div>
  )
);

export const FeaturesContext = createContext(FeaturesContextDefault);
export const Features = forwardRef<
  HTMLDivElement,
  FeaturesProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(FeaturesContext);
  return <Component {...props} ref={ref} />;
});
