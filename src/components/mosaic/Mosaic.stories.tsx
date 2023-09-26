import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Mosaic } from "./MosaicComponent";
import schema from "./mosaic.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Mosaic",
  args,
  argTypes,
  component: Mosaic,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Mosaic>;

export default meta;
export const BackgroundImage: Story = {
  args: pack({
    tiles: [
      {
        backgroundColor: "#81005a",
        textColor: "#fdbce9",
      },
      {
        backgroundColor: "#003380",
        textColor: "#cddffa",
      },
      {
        backgroundColor: "#004241",
        textColor: "#81c7c6",
      },
    ],
  }),
};
