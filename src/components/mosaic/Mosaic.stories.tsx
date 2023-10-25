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
export const ColorfulAlternatingLayout: Story = {
  args: pack({
    tiles: [
      {
        backgroundColor: "#81005a",
        textColor: "#fdbce9",
        image: "img/mosaic-1.png",
      },
      {
        backgroundColor: "#003380",
        textColor: "#cddffa",
        image: "img/mosaic-2.png",
      },
      {
        backgroundColor: "#004241",
        textColor: "#a3d5d4",
        image: "img/mosaic-1.png",
      },
    ],
  }),
};
