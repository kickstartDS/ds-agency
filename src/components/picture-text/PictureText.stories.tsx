import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { PictureText } from "./PictureTextComponent";
import schema from "./pictureText.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Components/Picture Text",
  args,
  argTypes,
  component: PictureText,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof PictureText>;

export default meta;

export const AboveLayout: Story = {
  args: pack({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    image: {
      source: "img/agency.png",
      alt: "Agency",
    },
    layout: "above",
  }),
};

export const BesideRightLayout: Story = {
  args: pack({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    image: {
      source: "img/agency.png",
      alt: "Agency",
    },
    layout: "beside-right",
  }),
};
