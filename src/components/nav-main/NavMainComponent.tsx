import { FC } from "react";
import { Link } from "@kickstartds/base/lib/link";
import { Picture } from "@kickstartds/base/lib/picture";
import { NavMainProps } from "./NavMainProps";
import "./nav-main.scss";
import "./nav-toggle.scss";
import "./js/NavToggle";
import "./js/navMainEvents";

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

export const NavMainItem: FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <li className="c-nav-main__item">
    <Link className="c-nav-main__link" href={href}>
      {label}
    </Link>
  </li>
);

export const NavMain: FC<NavMainProps> = ({ items }) =>
  items && items.length > 0 ? (
    <div className="c-nav-main__wrap">
      <NavToggleComponent />
      <nav className="c-nav-main" id="nav-main" aria-label="Hauptnavigation">
        <Link className="c-nav-main__logo" href="#">
          <Picture src="logo.svg" />
        </Link>
        <ul className="c-nav-main__list">
          {items.map((item) => (
            <NavMainItem {...item} key={item.href + item.label} />
          ))}
        </ul>
      </nav>
    </div>
  ) : null;
