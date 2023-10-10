import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { LogosPaid } from "./LogosPaidComponent";
import schema from "./logos-paid.schema.json";

const meta: Meta<typeof LogosPaid> = {
  title: "Paid Components/Logos",
  component: LogosPaid,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof LogosPaid>;

export const FourInARowWall: Story = {
  args: pack({
    logosPerRow: 4,
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

export const SixInARowLine: Story = {
  args: pack({
    logosPerRow: 6,
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

export const CenteredWithButton: Story = {
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
      style: "button",
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