import classnames from "classnames";
import { HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { TextProps } from "./TextProps";
import "./text.scss";
import { RichText } from "@kickstartds/base/lib/rich-text";

export const TextContextDefault = forwardRef<
  HTMLDivElement,
  TextProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      text,
      layout = "singleColumn",
      align = "left",
      highlightText = false,
      ...rest
    },
    ref
  ) => {
    const layoutClass = `${
      layout === "multiColumn" ? "c-rich-text--columns" : ""
    }`;
    const highlightClass = `${highlightText ? "c-rich-text--highlight" : ""}`;
    const alignClass = `${align === "center" ? "c-rich-text--center" : ""}`;

    return (
      <RichText
        {...rest}
        ref={ref}
        className={classnames(
          "dsa-text",
          `${layoutClass}`,
          `${alignClass}`,
          `${highlightClass}`
        )}
        text={text}
      />
    );
  }
);

export const TextContext = createContext(TextContextDefault);
export const Text = forwardRef<
  HTMLDivElement,
  TextProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(TextContext);
  return <Component {...props} ref={ref} />;
});
