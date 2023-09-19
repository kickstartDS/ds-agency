import classnames from "classnames";
import { FC } from "react";
import { HeaderProps } from "./HeaderProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import { NavMain } from "../nav-main/NavMainComponent";
import "./header.scss";

export const Header: FC<HeaderProps> = ({ logo, logoHref = "/", navItems }) => (
  <>
    <div className={classnames("c-header")}>
      <div className="c-header__content">
        <Link className="c-header__logo" href={logoHref}>
          <Picture {...logo} />
        </Link>

        <NavMain items={navItems} />
      </div>
    </div>
    <div className="c-header--spacer"></div>
  </>
);
