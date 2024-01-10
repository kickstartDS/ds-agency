import { HTMLAttributes, forwardRef, FC, PropsWithChildren } from "react";
import {
  ButtonContextDefault,
  ButtonContext,
} from "@kickstartds/base/lib/button";

import { ButtonProps } from "./ButtonProps";
import "./button.scss";

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps & HTMLAttributes<HTMLElement>
>(
  (
    {
      label,
      target,
      size = "medium",
      variant = "secondary",
      icon,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <ButtonContextDefault
      {...props}
      href={target}
      label={label}
      size={size}
      variant={
        variant === "primary"
          ? "solid"
          : variant === "secondary"
          ? "clear"
          : variant === "tertiary"
          ? "outline"
          : "solid"
      }
      disabled={disabled}
      iconAfter={{
        icon: icon,
      }}
      ref={ref}
    />
  )
);
Button.displayName = "Button";

export const ButtonProvider: FC<PropsWithChildren> = (props) => (
  <ButtonContext.Provider {...props} value={Button} />
);
