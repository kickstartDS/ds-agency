import { HTMLAttributes, FC } from "react";
import { LogoProps } from "./LogoProps";
import { Picture } from "@kickstartds/base/lib/picture";

export const Logo: FC<LogoProps & HTMLAttributes<HTMLElement>> = (logo) => {
  return (
    <div className="c-logos__logo">
      <Picture src={logo.src} />
    </div>
  );
};
