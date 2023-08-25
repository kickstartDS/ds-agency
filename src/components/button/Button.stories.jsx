import { Button } from "./ButtonComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import ButtonStories from "@kickstartds/base/lib/button/button.stories";
import schema from "./button.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  ...ButtonStories,
  title: "Components/Button",
  args,
  argTypes,
  component: Button,
  parameters: {
    jsonschema: schema,
  },
};

export const NativeButton = {
  args: pack({
    label: "Native Button",
    variant: "primary",
  }),
};

export const LinkButton = {
  args: pack({
    label: "Link Button",
    variant: "secondary",
    target: "#",
  }),
};

export const DisabledButton = {
  args: pack({
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  }),
};

export const PrimaryButton = {
  args: pack({
    label: "Primary Button",
    variant: "primary",
  }),
};

export const SecondaryButton = {
  args: pack({
    label: "Secondary Button",
    variant: "secondary",
  }),
};

export const TertiaryButton = {
  args: pack({
    label: "Tertiary Button",
    variant: "tertiary",
  }),
};
