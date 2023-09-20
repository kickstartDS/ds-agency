import { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "./HeaderComponent";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import schema from "./header.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
export const headerProps = {
  ...unpack(args),
  logo: {
    src: "/logo.svg",
    alt: "Systemics Logo",
    width: 176,
    height: 40,
    lazy: false,
  },
};
const meta: Meta = {
  title: "Layout/Header",
  args: pack(headerProps),
  argTypes,
  component: HeaderComponent,
  parameters: {
    jsonschema: schema,
  },
  excludeStories: ["headerProps"],
};
type Story = StoryObj<typeof HeaderComponent>;

export default meta;
export const Header: Story = {};
