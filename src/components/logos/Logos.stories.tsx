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

export const Centered: Story = {
  args: pack({
    logos: [
      {
        src: "img/logoipsum-212.svg",
        alt: "Logo 1",
      },
      {
        src: "img/logoipsum-217.svg",
        alt: "Logo 2",
      },
      {
        src: "img/logoipsum-239.svg",
        alt: "Logo 3",
      },
      {
        src: "img/logoipsum-244.svg",
        alt: "Logo 4",
      },
      {
        src: "img/logoipsum-250.svg",
        alt: "Logo 5",
      },
      {
        src: "img/logoipsum-286.svg",
        alt: "Logo 6",
      },
    ],
    cta: {
      toggle: false,
    },
  }),
};

export const LeftAlignedWithTextLink: Story = {
  args: pack({
    logos: [
      {
        src: "img/logoipsum-212.svg",
        alt: "Logo 1",
      },
      {
        src: "img/logoipsum-217.svg",
        alt: "Logo 2",
      },
      {
        src: "img/logoipsum-239.svg",
        alt: "Logo 3",
      },
      {
        src: "img/logoipsum-244.svg",
        alt: "Logo 4",
      },
      {
        src: "img/logoipsum-250.svg",
        alt: "Logo 5",
      },
      {
        src: "img/logoipsum-286.svg",
        alt: "Logo 6",
      },
    ],
    cta: {
      toggle: true,
    },
    align: "left",
  }),
};
