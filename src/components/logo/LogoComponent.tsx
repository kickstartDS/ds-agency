import classnames from "classnames";
import {
  createContext,
  forwardRef,
  ImgHTMLAttributes,
  useContext,
} from "react";
import { LogoProps } from "./LogoProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import "./logo.scss";

export type { LogoProps };

export const LogoContextDefault = forwardRef<
  HTMLImageElement,
  LogoProps & ImgHTMLAttributes<HTMLImageElement>
>(
  (
    {
      src,
      srcInverted,
      alt,
      inverted = false,
      width,
      height,
      homepageHref,
      className,
    },
    ref
  ) => {
    return (
      <Link className={classnames("dsa-logo", className)} href={homepageHref}>
        <Picture
          ref={ref}
          className="dsa-logo__img"
          src={inverted && srcInverted ? srcInverted : src}
          alt={alt}
          width={width}
          height={height}
        />
      </Link>
    );
  }
);

export const LogoContext = createContext(LogoContextDefault);
export const Logo = forwardRef<
  HTMLImageElement,
  LogoProps & ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  const Component = useContext(LogoContext);
  return <Component {...props} ref={ref} />;
});
Logo.displayName = "Logo";
