import classnames from "classnames";
import { HTMLAttributes, FC } from "react";
import { TextProps } from "./TextProps";
import "./text.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Text: FC<TextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  layoutVariant = "singleColumn",
  textStyle = "default",
  ...props
}) => {
  const layoutClass = `${
    layoutVariant === "multiColumn" ? "c-text--columns" : ""
  }`;

  const textStyleClass = `${
    textStyle === "highlight" ? "c-text--highlight" : ""
  }`;

  return (
    <div
      className={classnames("c-text", `${layoutClass}`, `${textStyleClass}`)}
      {...props}
    >
      <RichText text={text} />
    </div>
  );
};
