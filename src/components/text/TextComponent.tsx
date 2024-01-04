import classnames from "classnames";
import { HTMLAttributes, FC } from "react";
import { TextProps } from "./TextProps";
import "./text.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Text: FC<TextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  layout = "singleColumn",
  align = "left",
  highlightText = false,
  ...props
}) => {
  const layoutClass = `${
    layout === "multiColumn" ? "c-rich-text--columns" : ""
  }`;
  const highlightClass = `${highlightText ? "c-rich-text--highlight" : ""}`;
  const alignClass = `${align === "center" ? "c-rich-text--center" : ""}`;

  return (
    <RichText
      className={classnames(
        "c-text",
        `${layoutClass}`,
        `${alignClass}`,
        `${highlightClass}`
      )}
      {...props}
      text={text}
    />
  );
};
