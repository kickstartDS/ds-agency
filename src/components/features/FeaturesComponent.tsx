import { HTMLAttributes, FC } from "react";
import classnames from "classnames";
import { FeaturesProps } from "./FeaturesProps";
import "./features.scss";
import { Feature } from "./feature/FeatureComponent";

export const Features: FC<FeaturesProps & HTMLAttributes<HTMLDivElement>> = ({
  layout = "largeTiles",
  ctas = {
    style: "link",
    toggle: true,
  },
  style = "intext",
  items = [],
  ...props
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
      {...props}
    >
      {items.map((item, index) => (
        <Feature
          key={index}
          title={item.title}
          text={item.text}
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
          icon={item?.icon}
          ctaLabel={item?.cta?.label}
          ctaTarget={item?.cta?.target}
          ctaToggle={ctas?.toggle}
          ctaStyle={ctas?.style}
        />
      ))}
    </div>
  );
};
