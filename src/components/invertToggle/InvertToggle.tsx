import { identifier } from "./InvertToggle.client";
import { Switch } from "../switch/SwitchComponent";

export const InvertToggle = ({ target }: { target: string }) => {
  return (
    <Switch
      className="invert-toggle"
      icon="invert"
      label="Invert"
      ks-component={identifier}
      data-target={target}
    />
  );
};
