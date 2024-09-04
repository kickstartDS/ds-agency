import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import "./nav-topbar.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { NavTopbarProps } from "./NavTopbarProps";

export const NavTopbarContextDefault = forwardRef<
  HTMLElement,
  NavTopbarProps & HTMLAttributes<HTMLElement>
>(({ items }, ref) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-topbar"
      id="dsa-nav-main"
      aria-label="Hauptnavigation"
      ref={ref}
    >
      <ul className="dsa-nav-topbar__list">
        {items.map(({ label, href, active }) => {
          return (
            <li
              className={classnames(
                "dsa-nav-topbar__item",
                active && "dsa-nav-topbar__item--active"
              )}
              key={href}
            >
              <Link
                href={href}
                className={`dsa-nav-topbar__label dsa-nav-topbar__link`}
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

export const NavTopbarContext = createContext(NavTopbarContextDefault);
export const NavTopbar = forwardRef<
  HTMLElement,
  NavTopbarProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const Component = useContext(NavTopbarContext);
  return <Component {...props} ref={ref} />;
});
NavTopbar.displayName = "NavTopbar";
