import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import "./nav-toggle.scss";

export const NavToggleContextDefault = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((_, ref) => (
  <button
    ref={ref}
    type="button"
    className="dsa-nav-toggle"
    id="toggle-sidebar"
    aria-controls="dsa-nav-main"
    aria-expanded="false"
    ks-component="base.nav-toggle"
  >
    <span className="dsa-nav-toggle__label">toggle navigation</span>
    <span className="dsa-nav-toggle__icon">
      <span className="dsa-nav-toggle__icon__middle"></span>
    </span>
  </button>
));

export const NavToggleContext = createContext(NavToggleContextDefault);
export const NavToggle = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const Component = useContext(NavToggleContext);
  return <Component {...props} ref={ref} />;
});
NavToggle.displayName = "NavToggle";
