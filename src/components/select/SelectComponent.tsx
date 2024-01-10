import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Icon } from "@kickstartds/base/lib/icon";
import { identifier } from "./select.client";
import { SelectProps } from "./SelectProps";
import "./select.scss";
import { SelectField } from "@kickstartds/form/lib/select-field";

export const Select: FC<PropsWithChildren<SelectProps>> = ({
  label,
  icon,
  target,
  className,
}) => {
  return (
    <label
      className={classnames("select", className)}
      ks-component={identifier}
      data-target={target}
    >
      <div className="select__label">
        {icon && <Icon className="select__icon" icon={icon} />}
        {/* <span>{label}</span> */}
      </div>
      <SelectField
        label={label}
        hideLabel
        options={[
          {
            value: "google",
            label: "Google",
          },
          {
            value: "lughausen",
            label: "Lughausen",
          },
          {
            value: "telekom",
            label: "Telekom",
          },
        ]}
      />
    </label>
  );
};
