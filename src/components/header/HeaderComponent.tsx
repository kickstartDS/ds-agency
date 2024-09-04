import classnames from "classnames";
import { createContext, forwardRef, HTMLAttributes, useContext } from "react";
import { HeaderProps } from "./HeaderProps";
import { NavMain } from "../nav-main/NavMainComponent";
import { Logo } from "../logo/LogoComponent";
import "./header.scss";

export const HeaderContextDefault = forwardRef<
  HTMLDivElement,
  HeaderProps & HTMLAttributes<HTMLDivElement>
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
    <div
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
    </div>
  )
);

export const HeaderContext = createContext(HeaderContextDefault);
export const Header = forwardRef<
  HTMLDivElement,
  HeaderProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(HeaderContext);
  return <Component {...props} ref={ref} />;
});
Header.displayName = "Header";
