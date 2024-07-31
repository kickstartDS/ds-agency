import classnames from "classnames";
import { FC } from "react";
import { LogoProps } from "./LogoProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import "./logo.scss";

export const Logo: FC<LogoProps> = ({
  src,
  srcInverted,
  alt,
  inverted = false,
  width,
  height,
  homepageHref,
  className,
}) => {
  return (
    <Link className={classnames("dsa-logo", className)} href={homepageHref}>
      <Picture
        className="dsa-logo__img"
        src={inverted && srcInverted ? srcInverted : src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
};

Logo.displayName = "Logo";
