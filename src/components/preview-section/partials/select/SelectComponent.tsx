import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Icon } from "@kickstartds/base/lib/icon";
import { identifier } from "./select.client";
import { SelectProps } from "./SelectProps";
import "./select.scss";

export const Select: FC<PropsWithChildren<SelectProps>> = ({
  label,
  icon,
  options,
  target,
  className,
}) => {
  return (
    <>
      <label
        className={classnames("select", className)}
        ks-component={identifier}
        data-target={target}
      >
        <div className="select__label">
          {icon && (
            <Icon
              className="select__icon"
              icon={icon}
              aria-hidden="true"
              focusable="false"
            />
          )}
          <span>{label}</span>
        </div>
        <select>
          {options &&
            options.map((option, i) => (
              <option
                key={`option-${i}`}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
        </select>
        <Icon className="select__arrow" icon={"chevron-down"} />
      </label>
    </>
  );
};
