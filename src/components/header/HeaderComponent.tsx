import classnames from "classnames";
import { FC } from "react";
import { HeaderProps } from "./HeaderProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import { NavMain } from "../nav-main/NavMainComponent";
import "./header.scss";

export const Header: FC<HeaderProps> = ({ logo, floating, logoHref = "/" }) => (
  <>
    <div
      className={classnames("c-header", floating ? `c-header--floating` : "")}
    >
      <div className="c-header__content">
        <Link className="c-header__logo" href={logoHref}>
          <Picture {...logo} />
        </Link>

        <NavMain logo={logo} logoHref={logoHref} items={[]} />
      </div>
    </div>
  </>
);
