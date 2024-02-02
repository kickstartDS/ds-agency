import { Meta, StoryObj } from "@storybook/react";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Footer as FooterComponent } from "./FooterComponent";
import schema from "./footer.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
export const footerProps = {
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
  title: "Layout/Footer",
  args: pack(footerProps),
  argTypes,
  component: FooterComponent,
  parameters: {
    jsonschema: schema,
  },
  excludeStories: ["footerProps"],
};
type Story = StoryObj<typeof FooterComponent>;

export default meta;
export const Footer: Story = {
  parameters: {
    viewport: {
      width: 1280,
      height: 371,
    },
  },
};
