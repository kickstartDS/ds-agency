import { Meta, StoryObj } from "@storybook/react";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Slider } from "./SliderComponent";
import merge from "deepmerge";
import schema from "./slider.schema.dereffed.json";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import TeaserCardStory, { Card } from "../teaser-card/TeaserCard.stories";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/Slider",
  ...getArgsShared(schema as JSONSchema7),
  args,
  argTypes,
  component: Slider,
  parameters: {
    jsonschema: schema,
  },
  render: (args) => (
    <Slider {...args}>
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
      <TeaserCard {...merge(TeaserCardStory.args, unpack(Card.args))} />
    </Slider>
  ),
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const WithNavAndArrows: Story = {
  args: pack({
    arrows: true,
    nav: true,
  }),
};

export const MultiView: Story = {
  args: pack({
    perView: 3,
    gap: 20,
  }),
};

export const SlideShowWithAutoplay: Story = {
  args: pack({
    autoplay: true,
  }),
};
