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

export const PortraitText: Story = {};
PortraitText.args = pack({
  quote: "This product is amazing!",
  name: "John Doe",
  title: "CEO",
  image: "img/customer-1.png",
  rating: undefined,
});

export const PortraitTextWithRating: Story = {};
PortraitTextWithRating.args = pack({
  quote: "This product is amazing!",
  name: "John Doe",
  title: "CEO",
  image: "img/customer-1.png",
  rating: 5,
});
