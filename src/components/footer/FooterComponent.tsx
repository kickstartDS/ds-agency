import classnames from "classnames";
import { FC } from "react";
import { Link } from "@kickstartds/base/lib/link";
import { FooterProps } from "./FooterProps";
import { Logo } from "../logo/LogoComponent";
import "./footer.scss";

export const Footer: FC<FooterProps> = ({
  logo,
  byline,
  inverted = false,
  navItems = [],
}) => (
  <div className={classnames("dsa-footer")} ks-inverted={inverted.toString()}>
    <div className="dsa-footer__content">
      <Logo {...logo} inverted={inverted} />
      {byline && <span className="dsa-footer__byline">{byline}</span>}
      {navItems.length > 0 ? (
        <div className="dsa-footer__links">
          {navItems.map(({ label, active, ...linkProps }) => (
            <Link
              {...linkProps}
              className="dsa-footer__link"
              key={linkProps.href + label}
            >
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);
Footer.displayName = "Footer";
