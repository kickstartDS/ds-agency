import {
  HTMLAttributes,
  forwardRef,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import {
  DividerContextDefault as DsaDividerContextDefault,
  DividerContext as DsaDividerContext,
} from "@kickstartds/base/lib/divider";

import { DividerProps } from "./DividerProps";
import "./divider.scss";

export type { DividerProps };

export const DividerContextDefault = forwardRef<
  HTMLHRElement,
  DividerProps & HTMLAttributes<HTMLHRElement>
>(({ variant, className, ...props }, ref) => (
  <DsaDividerContextDefault
    {...props}
    className={classnames("dsa-divider", className)}
    variant={variant}
    ref={ref}
  />
));
export const DividerContext = createContext(DividerContextDefault);
export const Divider = forwardRef<
  HTMLHRElement,
  DividerProps & HTMLAttributes<HTMLHRElement>
>((props, ref) => {
  const Component = useContext(DividerContext);
  return <Component {...props} ref={ref} />;
});
Divider.displayName = "Divider";

export const DividerProvider: FC<PropsWithChildren> = (props) => (
  <DsaDividerContext.Provider {...props} value={DividerContextDefault} />
);
