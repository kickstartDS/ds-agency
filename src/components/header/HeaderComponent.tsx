import classnames from "classnames";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { HeaderProps } from "./HeaderProps";
import { NavMain } from "../nav-main/NavMainComponent";
import { Logo } from "../logo/LogoComponent";
import "./header.scss";

export type { HeaderProps };

export const HeaderContextDefault = forwardRef<
  HTMLElement,
  HeaderProps & HTMLAttributes<HTMLElement>
>(
  (
    {
      logo,
      floating,
      inverted = false,
      flyoutInverted = false,
      dropdownInverted = false,
      navItems = [],
    },
    ref
  ) => (
    <header
      className={classnames(
        "dsa-header",
        floating ? `dsa-header--floating` : ""
      )}
      ks-inverted={inverted.toString()}
      ref={ref}
    >
      <div className="dsa-header__content">
        <Logo {...logo} className="dsa-header__logo" inverted={inverted} />
        <NavMain
          flyoutInverted={flyoutInverted}
          dropdownInverted={dropdownInverted}
          items={navItems}
          logo={{
            ...logo,
            inverted: flyoutInverted,
          }}
        />
      </div>
    </header>
  )
);

export const HeaderContext = createContext(HeaderContextDefault);
export const Header = forwardRef<
  HTMLElement,
  HeaderProps & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const Component = useContext(HeaderContext);
  return <Component {...props} ref={ref} />;
});
Header.displayName = "Header";
