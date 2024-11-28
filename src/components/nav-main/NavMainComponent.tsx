import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { NavMainProps } from "./NavMainProps";
import "./js/NavToggle.client";
import "./js/navMainEvents.client";
import { NavToggle } from "./NavToggleComponent";
import { NavTopbar } from "../nav-topbar/NavTopbarComponent";
import { NavFlyout } from "../nav-flyout/NavFlyoutComponent";
import "./nav-main.scss";

export type { NavMainProps };

export const NavMainContextDefault = forwardRef<
  HTMLDivElement,
  NavMainProps & HTMLAttributes<HTMLDivElement>
>(({ logo, items, flyoutInverted, dropdownInverted }, ref) =>
  items && items.length > 0 ? (
    <div ref={ref} className="dsa-nav-main">
      <NavToggle />
      <NavTopbar items={items} inverted={dropdownInverted} />
      <NavFlyout items={items} inverted={flyoutInverted} logo={logo} />
    </div>
  ) : null
);

export const NavMainContext = createContext(NavMainContextDefault);
export const NavMain = forwardRef<
  HTMLDivElement,
  NavMainProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(NavMainContext);
  return <Component {...props} ref={ref} />;
});
NavMain.displayName = "NavMain";
