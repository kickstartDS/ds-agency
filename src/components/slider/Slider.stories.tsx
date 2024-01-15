import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Slider } from "./SliderComponent";
import schema from "./slider.schema.dereffed.json";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Layout/Slider",
  ...getArgsShared(schema as JSONSchema7),
  args,
  argTypes,
  component: Slider,
  parameters: {
    jsonschema: schema,
  },
  render: (args) => (
    <Slider {...args}>
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        image="/static/img/showcases/comp_tfe01.jpg"
        target="#"
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        image="/static/img/showcases/comp_audio01.jpg"
        target="#"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        image="/static/img/showcases/comp_eco01.jpg"
        target="#"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
      />
    </Slider>
  ),
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const WithArrows: Story = {
  args: pack({
    gap: 15,
    arrows: true,
  }),
};

export const WithTeasedNeighbours: Story = {
  args: pack({
    gap: 15,
    perView: 1.5,
    arrows: true,
    nav: true,
  }),
};

export const WithNav: Story = {
  args: pack({
    gap: 15,
    arrows: true,
    nav: true,
  }),
};

export const WithAutoplay: Story = {
  args: pack({
    gap: 15,
    nav: true,
    arrows: true,
    autoplay: true,
  }),
};
