import { FC, PropsWithChildren } from "react";
import { SectionControlsProps } from "./SectionControlsProps";
import "./section-controls.scss";
import { InvertToggle } from "../../../invertToggle/InvertToggle";
import { Switch } from "../../../switch/SwitchComponent";
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
            <Select
              label="Theme: "
              icon="paint"
              target={""}
              options={[
                {
                  label: "DSA",
                },
                {
                  label: "Google",
                },
                {
                  label: "Telekom",
                },
                {
                  label: "Lughausen",
                },
              ]}
            />
          ) : (
            ""
          )}
          {invertToggle ? <InvertToggle target={".l-section"} /> : ""}
          {layoutToggle ? (
            <Switch label="Show layout" icon="wireframe" target={""} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
