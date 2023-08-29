import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Testimonial } from "./TestimonialComponent";

import schema from "./testimonial.schema.json";

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {};
Default.args = pack({
  quote: "This product is amazing!",
  name: "John Doe",
  title: "CEO",
  image: "https://example.com/image.jpg",
  rating: 5,
});
