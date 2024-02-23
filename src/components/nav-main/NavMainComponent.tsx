import classnames from "classnames";
import { FC } from "react";
import { Link } from "@kickstartds/base/lib/link";
import { Picture } from "@kickstartds/base/lib/picture";
import { NavMainProps } from "./NavMainProps";
import "./nav-main.scss";
import "./nav-toggle.scss";
import "./js/NavToggle.client";
import "./js/navMainEvents.client";

export const NavToggleComponent: FC = () => (
  <button
    type="button"
    className="nav-toggle"
    id="toggle-sidebar"
    aria-controls="nav-main"
    aria-expanded="false"
    ks-component="base.nav-toggle"
  >
    <span className="nav-toggle__label">toggle navigation</span>
    <span className="nav-toggle__icon">
      <span className="nav-toggle__icon__middle"></span>
    </span>
  </button>
);

export const NavMainItem: FC<{
  label: string;
  href: string;
  active: boolean;
}> = ({ label, href, active }) => (
  <li
    className={classnames(
      "nav-main__item",
      active === true ? "nav-main__item--active" : ""
    )}
  >
    <Link className="nav-main__link" href={href}>
      {label}
    </Link>
  </li>
);

export const NavMain: FC<NavMainProps> = ({ logo, logoHref = "/", items }) =>
  items && items.length > 0 ? (
    <div className="nav-main__wrap">
      <NavToggleComponent />
      <nav
        className={classnames(
          "nav-main",
          items.some((item) => item.active) ? "nav-main--active" : ""
        )}
        id="nav-main"
        aria-label="Hauptnavigation"
      >
        <Link className="nav-main__logo" href={logoHref}>
          <Picture {...logo} />
        </Link>
        <ul className="nav-main__list">
          {items.map((item) => (
            <NavMainItem
              {...item}
              active={item.active ?? false}
              key={item.href + item.label}
            />
          ))}
        </ul>
      </nav>
    </div>
  ) : null;
