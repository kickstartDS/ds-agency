import classnames from "classnames";
import { FC } from "react";
import { HeaderProps } from "./HeaderProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import { NavMain } from "../nav-main/NavMainComponent";
import "./header.scss";

export const Header: FC<HeaderProps> = ({
  logo,
  logoHref = "/",
  floating,
  inverted = false,
  flyoutLogoInverted = false,
  navItems = [],
}) => (
  <>
    <div
      className={classnames(
        "dsa-header",
        floating ? `dsa-header--floating` : ""
      )}
      ks-inverted={inverted.toString()}
    >
      <div className="dsa-header__content">
        <Link className="dsa-header__logo" href={logoHref}>
          <Picture
            className="dsa-header__logo__img"
            src={logo?.src}
            alt={logo?.alt}
            width={logo?.width}
            height={logo?.height}
            lazy={inverted}
          />
          <Picture
            className="dsa-header__logo__img dsa-header__logo__img--inverted"
            src={logo?.srcInverted || logo?.src}
            alt={logo?.alt}
            width={logo?.width}
            height={logo?.height}
            lazy={!inverted}
          />
        </Link>

        <NavMain
          flyoutLogoInverted={flyoutLogoInverted}
          logo={logo}
          logoHref={logoHref}
          items={navItems}
        />
      </div>
    </div>
  </>
);
Header.displayName = "Header";
