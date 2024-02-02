import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { LogoProps } from "./LogoProps";
import { Picture } from "@kickstartds/base/lib/picture";

export const LogoContextDefault = forwardRef<
  HTMLDivElement,
  LogoProps & HTMLAttributes<HTMLDivElement>
>(({ src, ...rest }, ref) => (
  <div {...rest} ref={ref} className="c-logos__logo">
    <Picture src={src} />
  </div>
));

export const LogoContext = createContext(LogoContextDefault);
export const Logo = forwardRef<
  HTMLDivElement,
  LogoProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(LogoContext);
  return <Component {...props} ref={ref} />;
});
