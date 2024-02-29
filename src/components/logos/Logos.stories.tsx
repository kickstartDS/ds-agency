import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Logos } from "./LogosComponent";
import schema from "./logos.schema.dereffed.json";
import cssprops from "./logos-tokens.json";

const meta: Meta<typeof Logos> = {
  title: "Components/Logos",
  component: Logos,
  parameters: {
    jsonschema: schema,
    cssprops,
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Logos>;

export const CenteredWithButton: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 598,
    },
  },
  args: pack({
    logo: [
      {
        src: "img/logos/logoipsum-212.svg",
        alt: "Logo 1",
      },
      {
        src: "img/logos/logoipsum-217.svg",
        alt: "Logo 2",
      },
      {
        src: "img/logos/logoipsum-239.svg",
        alt: "Logo 3",
      },
      {
        src: "img/logos/logoipsum-244.svg",
        alt: "Logo 4",
      },
      {
        src: "img/logos/logoipsum-250.svg",
        alt: "Logo 5",
      },
      {
        src: "img/logos/logoipsum-286.svg",
        alt: "Logo 6",
      },
    ],
    cta: {
      toggle: true,
      style: "button",
    },
  }),
};

export const LeftAlignedWithTextLink: Story = {
  parameters: {
    viewport: {
      width: 1000,
      height: 517,
    },
  },
  args: pack({
    logo: [
      {
        src: "img/logos/logoipsum-212.svg",
        alt: "Logo 1",
      },
      {
        src: "img/logos/logoipsum-217.svg",
        alt: "Logo 2",
      },
      {
        src: "img/logos/logoipsum-239.svg",
        alt: "Logo 3",
      },
      {
        src: "img/logos/logoipsum-244.svg",
        alt: "Logo 4",
      },
      {
        src: "img/logos/logoipsum-250.svg",
        alt: "Logo 5",
      },
      {
        src: "img/logos/logoipsum-286.svg",
        alt: "Logo 6",
      },
    ],
    cta: {
      toggle: true,
    },
    align: "left",
  }),
};
