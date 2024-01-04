import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Mosaic } from "./MosaicComponent";
import schema from "./mosaic.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/Mosaic",
  args,
  argTypes,
  component: Mosaic,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Mosaic>;
export default meta;

export const ColorfulTiles: Story = {
  args: pack({
    layout: "alternate",
    tiles: [
      {
        backgroundColor: "#81005a",
        headline: "Collaborative Environment",
        text: "Our team thrives in a collaborative environment, fostering creativity and innovation.",
        image: {
          src: "img/mosaic-1.png",
        },
      },
      {
        backgroundColor: "#003380",
        headline: "Modern Infrastructure",
        text: "Our state-of-the-art office facilities inspire productivity and efficiency.",
        image: {
          src: "img/mosaic-2.png",
        },
      },
      {
        backgroundColor: "#004241",
        headline: "Teamwork",
        text: "We believe in the power of teamwork. Together, we can achieve great things.",
        image: {
          src: "img/mosaic-3.png",
        },
      },
    ],
  }),
};

export const ColorfulTextWithIllustrations: Story = {
  args: pack({
    layout: "textLeft",
    tiles: [
      {
        textColor: "#FCFF7D",
        button: {
          toggle: false,
        },
        headline: "Effective Communication",
        sub: "We believe in clear and effective communication. Our team members are always ready to share ideas and solutions.",
        image: {
          src: "img/mosaic-2_1.svg",
        },
      },
      {
        textColor: "#7DD0FF",
        button: {
          toggle: false,
        },
        headline: "Data-Driven Decisions",
        sub: "We make decisions based on data. Our strategies are always backed by solid facts and figures.",
        image: {
          src: "img/mosaic-2_2.svg",
        },
      },
      {
        textColor: "#FF7DC3",
        button: {
          toggle: false,
        },
        headline: "Innovative Design",
        sub: "We are committed to creating innovative designs. Our team is always exploring new ways to improve user experience.",
        image: {
          src: "img/mosaic-2_3.svg",
        },
      },
    ],
  }),
};
