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
    className="dsa-nav-toggle"
    id="toggle-sidebar"
    aria-controls="nav-main"
    aria-expanded="false"
    ks-component="base.nav-toggle"
  >
    <span className="dsa-nav-toggle__label">toggle navigation</span>
    <span className="dsa-nav-toggle__icon">
      <span className="dsa-nav-toggle__icon__middle"></span>
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
      "dsa-nav-main__item",
      active === true ? "dsa-nav-main__item--active" : ""
    )}
  >
    <Link className="dsa-nav-main__link" href={href}>
      {label}
    </Link>
  </li>
);

export const NavMain: FC<NavMainProps> = ({
  logo,
  items,
  flyoutLogoInverted,
}) =>
  items && items.length > 0 ? (
    <div className="dsa-nav-main__wrap">
      <NavToggleComponent />
      <nav
        className={classnames(
          "dsa-nav-main",
          items.some((item) => item.active) ? "dsa-nav-main--active" : ""
        )}
        id="dsa-nav-main"
        aria-label="Hauptnavigation"
      >
        <Link
          className="dsa-nav-main__logo"
          ks-inverted={flyoutLogoInverted === true ? "true" : "false"}
          href={logo?.href}
        >
          <Picture
            className="dsa-nav-main__logo__img"
            src={logo?.src}
            alt={logo?.alt}
            width={logo?.width}
            height={logo?.height}
            lazy={flyoutLogoInverted}
          />
          <Picture
            className="dsa-nav-main__logo__img dsa-nav-main__logo__img--inverted"
            src={logo?.srcInverted || logo?.src}
            alt={logo?.alt}
            width={logo?.width}
            height={logo?.height}
            lazy={!flyoutLogoInverted}
          />
        </Link>
        <ul className="dsa-nav-main__list">
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
