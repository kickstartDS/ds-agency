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

export const Default: Story = {};
Default.args = pack({
  headline: "Gallery Headline",
  text: "This is a gallery of images",
  images: [
    { url: "https://example.com/image1.jpg", caption: "Image 1" },
    { url: "https://example.com/image2.jpg", caption: "Image 2" },
  ],
  alignment: "below",
});
