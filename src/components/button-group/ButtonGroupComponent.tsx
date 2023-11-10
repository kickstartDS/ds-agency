import { FC, PropsWithChildren, forwardRef, useContext } from "react";
import { ButtonContext } from "@kickstartds/base/lib/button";
import {
  ButtonGroupContext,
  ButtonGroupContextDefault,
} from "@kickstartds/base/lib/button-group";
import { ButtonGroupProps } from "./ButtonGroupProps";

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ buttons, ...props }, ref) => {
    return buttons && buttons.length > 0 ? (
      <ButtonGroupContextDefault
        {...props}
        items={buttons
          .filter((button) => button.label)
          .map((button, index) => ({
            size: "medium",
            ...button,
            variant:
              index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary",
          }))}
        ref={ref}
      />
    ) : null;
  }
);

export const ButtonGroupProvider: FC<PropsWithChildren> = (props) => (
  <ButtonGroupContext.Provider {...props} value={ButtonGroup} />
);

// hook to create a ButtonGroup, that can be used as ButtonContext.Provider value
export const useButtonGroup = () => {
  const Button = useContext(ButtonContext);
  return (props: ButtonGroupProps) => (
    <ButtonContext.Provider value={Button}>
      <ButtonGroup {...props} />
    </ButtonContext.Provider>
  );
};
