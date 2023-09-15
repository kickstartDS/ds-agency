import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Gallery } from "./GalleryComponent";
import schema from "./gallery.schema.json";

const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  component: Gallery,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const SmallTiles: Story = {};
SmallTiles.args = pack({
  images: [
    { url: "img/agency.png", caption: "Caption Image 1" },
    { url: "img/team.png", caption: "Caption Image 2" },
    { url: "img/agency.png", caption: "Caption Image 3" },
    { url: "img/agency.png", caption: "Caption Image 1" },
    { url: "img/team.png", caption: "Caption Image 2" },
    { url: "img/agency.png", caption: "Caption Image 3" },
  ],
  layout: "smallTiles",
});

export const LargeTiles: Story = {};
LargeTiles.args = pack({
  images: [
    { url: "img/agency.png", caption: "Caption Image 1" },
    { url: "img/team.png", caption: "Caption Image 2" },
    { url: "img/agency.png", caption: "Caption Image 3" },
    { url: "img/agency.png", caption: "Caption Image 1" },
    { url: "img/team.png", caption: "Caption Image 2" },
    { url: "img/agency.png", caption: "Caption Image 3" },
  ],
  layout: "largeTiles",
});
