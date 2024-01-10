import { Meta, StoryObj } from "@storybook/react";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import * as themes from "../../themes";
import { Header as HeaderComponent } from "./HeaderComponent";
import schema from "./header.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
export const headerProps = {
  ...unpack(args),
  logo: themes.dsa.logo,
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
export const Header: Story = {
  render: (args, { globals: { theme } }) => (
    <HeaderComponent {...args} logo={themes[theme || "dsa"].logo} />
  ),
};
