import classnames from "classnames";
import { HTMLAttributes, FC } from "react";
import { TextProps } from "./TextProps";
import "./text.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Text: FC<TextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  layout = "singleColumn",
  align = "left",
  style = "default",
  ...props
}) => {
  const layoutClass = `${
    layout === "multiColumn" ? "c-rich-text--columns" : ""
  }`;
  const styleClass = `${style === "highlight" ? "c-rich-text--highlight" : ""}`;
  const alignClass = `${align === "center" ? "c-rich-text--center" : ""}`;

  return (
    <RichText
      className={classnames(
        "c-text",
        `${layoutClass}`,
        `${alignClass}`,
        `${styleClass}`
      )}
      {...props}
      text={text}
    />
  );
};
