import classnames from "classnames";
import { NavFlyoutProps } from "./NavFlyoutProps";
import { Link } from "@kickstartds/base/lib/link";
import { Logo } from "../logo/LogoComponent";
import "./nav-flyout.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";

export const NavFlyoutContextDefault = forwardRef<
  HTMLElement,
  NavFlyoutProps & HTMLAttributes<HTMLElement>
>(({ items, inverted, logo }, ref) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-flyout"
      ks-inverted={inverted.toString()}
      id="dsa-nav-flyout"
      aria-label="Hauptnavigation"
      ref={ref}
    >
      <Logo {...logo} className="dsa-nav-flyout__logo" />

      <ul className="dsa-nav-flyout__list">
        {items.map(({ label, href, active }) => {
          return (
            <li
              className={classnames(
                "dsa-nav-flyout__item",
                active && "dsa-nav-flyout__item--active"
              )}
              key={href}
            >
              <Link
                href={href}
                className={`dsa-nav-flyout__label dsa-nav-flyout__link`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null
);

export const NavFlyoutContext = createContext(NavFlyoutContextDefault);
export const NavFlyout = forwardRef<
  HTMLElement,
  NavFlyoutProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const Component = useContext(NavFlyoutContext);
  return <Component {...props} ref={ref} />;
});
NavFlyout.displayName = "NavFlyout";
