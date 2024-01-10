import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Icon } from "@kickstartds/base/lib/icon";
import { identifier } from "./switch.client";
import { SwitchProps } from "./SwitchProps";
import "./switch.scss";

export const Switch: FC<PropsWithChildren<SwitchProps>> = ({
  label,
  icon,
  target,
  className,
}) => {
  return (
    <label
      className={classnames("switch", className)}
      ks-component={identifier}
      data-target={target}
    >
      <div className="switch__label">
        {icon && <Icon className="switch__icon" icon={icon} />}
        <span>{label}</span>
      </div>
      <label className="switch__switch">
        <input className="switch__checkbox" type="checkbox" />
        <div className="switch__slider"></div>
      </label>
    </label>
  );
};
