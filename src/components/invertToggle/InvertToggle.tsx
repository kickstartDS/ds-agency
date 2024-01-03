import { Icon } from "@kickstartds/base/lib/icon";
import { identifier } from "./InvertToggle.client";
import "./invert-toggle.scss";

export const InvertToggle = ({ target }: { target: string }) => {
  return (
    <div
      className="invert-toggle"
      ks-component={identifier}
      data-target={target}
    >
      <div className="invert-toggle__container">
        <label className="invert-toggle__button">
          <span className="invert-toggle__label">
            <Icon className="invert-toggle__icon" icon="invert" /> Invert
          </span>
          <label className="invert-toggle__switch">
            <input className="invert-toggle__checkbox" type="checkbox" />
            <div className="invert-toggle__slider"></div>
          </label>
        </label>
      </div>
    </div>
  );
};
