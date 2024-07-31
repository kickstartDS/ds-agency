import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Footer as FooterComponent } from "./FooterComponent";
import schema from "./footer.schema.dereffed.json";
import customProperties from "./footer-tokens.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
export const footerProps = {
  ...unpack(args),
  logo: {
    src: "/logo.svg",
    srcInverted: "/logo-inverted.svg",
    inverted: false,
    homepageHref: "#",
    alt: "Systemics Logo",
    width: 176,
    height: 40,
  },
};

const meta: Meta = {
  title: "Layout/Footer",
  args: pack(footerProps),
  argTypes,
  component: FooterComponent,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  excludeStories: ["footerProps"],
};

export default meta;

type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {
  parameters: {
    viewport: {
      width: 1280,
      height: 371,
    },
  },
};
