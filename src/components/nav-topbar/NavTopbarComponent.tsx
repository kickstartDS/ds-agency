import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { NavDropdown } from "../nav-dropdown/NavDropdownComponent";
import "./nav-topbar.scss";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { NavTopbarProps } from "./NavTopbarProps";

export type { NavTopbarProps };

export const NavTopbarContextDefault = forwardRef<
  HTMLElement,
  NavTopbarProps & HTMLAttributes<HTMLElement>
>(({ items, inverted }, ref) =>
  items && items.length > 0 ? (
    <nav
      className="dsa-nav-topbar"
      id="dsa-nav-main"
      aria-label="Hauptnavigation"
      ref={ref}
    >
      <ul className="dsa-nav-topbar__list">
        {items.map(({ label, href, active, items: subItems }) => {
          return (
            <li
              className={classnames(
                "dsa-nav-topbar__item",
                active && "dsa-nav-topbar__item--active",
                subItems?.length && "dsa-nav-topbar__item--dropdown"
              )}
              key={href}
            >
              {subItems?.length ? (
                <span tabIndex={0} className="dsa-nav-topbar__label">
                  {label}
                  {subItems?.length ? (
                    <Icon
                      className="dsa-nav-topbar__label__icon"
                      icon="chevron-down"
                    />
                  ) : (
                    ""
                  )}
                </span>
              ) : (
                <Link
                  href={href}
                  className={`dsa-nav-topbar__label dsa-nav-topbar__link`}
                >
                  {label}
                </Link>
              )}

              {subItems?.length ? (
                <NavDropdown items={subItems} inverted={inverted} />
              ) : null}
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
