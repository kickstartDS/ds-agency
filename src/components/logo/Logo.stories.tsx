import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Logo as LogoComponent } from "./LogoComponent";
import schema from "./logo.schema.dereffed.json";
import customProperties from "./logo-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
export const logoProps = {
  ...unpack(args),
  src: "/logo.svg",
  srcInverted: "/logo-inverted.svg",
  homepageHref: "#",
  inverted: false,
  alt: "Systemics Logo",
  width: 176,
  height: 40,
};
const meta: Meta = {
  title: "Layout/Logo",
  args: pack(logoProps),
  argTypes,
  component: LogoComponent,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  excludeStories: ["logoProps"],
};

export default meta;

type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {
  parameters: {
    viewport: {
      width: 176,
      height: 40,
    },
  },
};
