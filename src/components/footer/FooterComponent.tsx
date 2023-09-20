import classnames from "classnames";
import { FC } from "react";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";
import "./footer.scss";
import { FooterProps } from "./FooterProps";

const now = new Date();

export const Footer: FC<FooterProps> = ({
  logo,
  logoHref = "/",
  navItems = [],
}) => (
  <div className={classnames("c-footer")}>
    <div className="c-footer__content">
      <Link className="c-footer__logo" href={logoHref}>
        <Picture {...logo} />
      </Link>

      <span className="c-footer__trademark">
        © {now.getFullYear()} systemics Inc. All rights reserved.
      </span>
      {navItems.length > 0 ? (
        <div className="c-footer__links">
          {navItems.map(({ href, label }) => (
            <Link href={href} className="c-footer__link">
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);
