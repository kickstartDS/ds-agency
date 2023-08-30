import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Logos } from "./LogosComponent";
import schema from "./logos.schema.json";

const meta: Meta<typeof Logos> = {
  title: "Components/Logos",
  component: Logos,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Logos>;

export const Default: Story = {};
Default.args = pack({
  headline: "Our Partners",
  headlineAlign: "center",
  logos: [
    { url: "https://example.com/logo1.jpg", caption: "Logo 1" },
    { url: "https://example.com/logo2.jpg", caption: "Logo 2" },
  ],
  logosPerRow: 2,
  ctaText: "See More",
});
