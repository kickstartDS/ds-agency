import { FC } from "react";
import { Link } from "@kickstartds/base/lib/link";
import "./nav-main.scss";
import "./nav-toggle.scss";
import "./js/NavToggle";
import "./js/navMainEvents";
import { Picture } from "@kickstartds/base/lib/picture";

export const NavToggleComponent: FC = () => (
  <button
    type="button"
    className="nav-toggle"
    id="toggle-sidebar"
    aria-controls="nav-main"
    aria-expanded="false"
    ks-component="base.nav-toggle"
  >
    <span className="nav-toggle__label">Navigation öffnen/schließen</span>
    <div className="nav-toggle__icon">
      <div className="nav-toggle__icon__middle"></div>
    </div>
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

export const NavMain: FC = ({}) => (
  <div className="c-nav-main__wrap">
    <NavToggleComponent />
    <nav className="c-nav-main" id="nav-main" aria-label="Hauptnavigation">
      <Link className="c-nav-main__logo" href="#">
        <Picture src="logo.svg" />
      </Link>
      <ul className="c-nav-main__list">
        <NavMainItem href="#" label="About us" />
        <NavMainItem href="#" label="Our Services" />
        <NavMainItem href="#" label="Project" />
        <NavMainItem href="#" label="Showcase" />
        <NavMainItem href="#" label="Blog" />
      </ul>
    </nav>
  </div>
);
