import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import classnames from "classnames";
import { FeaturesProps } from "./FeaturesProps";
import "./features.scss";
import { Feature } from "../feature/FeatureComponent";

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
        <Feature key={index} {...feature} style={style} />
      ))}
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
