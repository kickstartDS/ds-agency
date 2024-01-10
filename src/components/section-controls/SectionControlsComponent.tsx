import { FC, PropsWithChildren } from "react";
import { SectionControlsProps } from "./SectionControlsProps";
import "./section-controls.scss";
import { InvertToggle } from "../invertToggle/InvertToggle";
import { Switch } from "../switch/SwitchComponent";
import { Select } from "../select/SelectComponent";

export const SectionControls: FC<PropsWithChildren<SectionControlsProps>> = ({
  layoutToggle,
  invertToggle,
  themeSwitch,
}) => {
  return (
    <div className="c-section-controls">
      <div className="c-section-controls__wrapper">
        <div className="c-section-controls__controls">
          {themeSwitch ? (
            <Select label="Switch Theme" icon="paint" target={""} />
          ) : (
            ""
          )}
          {invertToggle ? <InvertToggle target={".l-section"} /> : ""}
          {layoutToggle ? (
            <Switch label="Show content" icon="wireframe" target={""} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
