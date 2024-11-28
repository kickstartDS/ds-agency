import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { FooterProps } from "./FooterProps";
import { Logo } from "../logo/LogoComponent";
import "./footer.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";

export type { FooterProps };

export const FooterContextDefault = forwardRef<
  HTMLDivElement,
  FooterProps & HTMLAttributes<HTMLDivElement>
>(({ byline, navItems, inverted, logo }, ref) =>
  navItems && navItems.length > 0 ? (
    <div
      className={classnames("dsa-footer")}
      ks-inverted={inverted.toString()}
      ref={ref}
    >
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
  ) : null
);

export const FooterContext = createContext(FooterContextDefault);
export const Footer = forwardRef<
  HTMLDivElement,
  FooterProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(FooterContext);
  return <Component {...props} ref={ref} />;
});
Footer.displayName = "Footer";
