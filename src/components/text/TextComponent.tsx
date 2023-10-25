import classnames from "classnames";
import { HTMLAttributes, FC } from "react";
import { TextProps } from "./TextProps";
import "./text.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const Text: FC<TextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  layout = "singleColumn",
  style = "default",
  ...props
}) => {
  const layoutClass = `${layout === "multiColumn" ? "c-text--columns" : ""}`;

  const styleClass = `${style === "highlight" ? "c-text--highlight" : ""}`;

  return (
    <div
      className={classnames("c-text", `${layoutClass}`, `${styleClass}`)}
      {...props}
    >
      <RichText text={text} />
    </div>
  );
};
