import { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "./HeaderComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import schema from "./header.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Layout/Header",
  args,
  argTypes,
  component: HeaderComponent,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof HeaderComponent>;

export default meta;
export const Header: Story = {
  args: pack({
    logo: {
      src: "/logo.svg",
      alt: "Systemics Logo",
      width: 176,
      height: 40,
      lazy: false,
    },
  }),
};
