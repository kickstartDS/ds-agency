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
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 1",
      alt: "Alt text Image 1",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 2",
      alt: "Alt text Image 2",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 3",
      alt: "Alt text Image 3",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 4",
      alt: "Alt text Image 4",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 5",
      alt: "Alt text Image 5",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 6",
      alt: "Alt text Image 6",
    },
  ],
  layout: "smallTiles",
});

export const Lightbox: Story = {};
Lightbox.args = pack({
  layout: "smallTiles",
  lightbox: true,
  images: [
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 1",
      alt: "Alt text Image 1",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 2",
      alt: "Alt text Image 2",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 3",
      alt: "Alt text Image 3",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 4",
      alt: "Alt text Image 4",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 5",
      alt: "Alt text Image 5",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 6",
      alt: "Alt text Image 6",
    },
  ],
});

export const LargeTiles: Story = {};
LargeTiles.args = pack({
  images: [
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 1",
      alt: "Alt text Image 1",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 2",
      alt: "Alt text Image 2",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 3",
      alt: "Alt text Image 3",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 4",
      alt: "Alt text Image 4",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 5",
      alt: "Alt text Image 5",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 6",
      alt: "Alt text Image 6",
    },
  ],
  layout: "largeTiles",
});

export const Stack: Story = {};
Stack.args = pack({
  images: [
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 1",

      alt: "Alt text Image 1",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 2",

      alt: "Alt text Image 2",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 3",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 4",
      alt: "Alt text Image 4",
    },
    {
      url: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
      caption: "Caption Image 5",
      alt: "Alt text Image 5",
    },
    {
      url: "img/close-up-young-business-team-working.png",
      caption: "Caption Image 6",
      alt: "Alt text Image 6",
    },
  ],
  layout: "stack",
});
