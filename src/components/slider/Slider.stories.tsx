import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Slider } from "./SliderComponent";
import schema from "./slider.schema.dereffed.json";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";

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
      <TeaserCard
        image="img/mosaic-1.png"
        headline="Innovative Solutions"
        text="We provide innovative solutions to complex business problems. Our team is dedicated to helping your business grow."
      />
      <TeaserCard
        image="img/mosaic-2.png"
        headline="Expert Teams"
        text="Our team of experts is always ready to provide top-notch services. We have the skills and experience to deliver exceptional results."
      />
      <TeaserCard
        image="img/mosaic-3.png"
        headline="Quality Services"
        text="We are committed to providing quality services. We strive for excellence in everything we do."
      />
      <TeaserCard
        image="img/mosaic-1.png"
        headline="Customer Satisfaction"
        text="Customer satisfaction is our top priority. We work hard to meet and exceed our clients' expectations."
      />
      <TeaserCard
        image="img/mosaic-2.png"
        headline="Continuous Improvement"
        text="We believe in continuous improvement. We are always looking for ways to improve our services and deliver better results."
      />
      <TeaserCard
        image="img/mosaic-1.png"
        headline="Strategic Approach"
        text="We take a strategic approach to solve complex problems. Our strategies are designed to deliver long-term success."
      />
    </Slider>
  ),
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const MultiView: Story = {
  args: pack({
    perView: 3,
    gap: 20,
  }),
};

export const WithNavAndArrows: Story = {
  args: pack({
    arrows: true,
    nav: true,
  }),
};

export const SlideShowWithAutoplay: Story = {
  args: pack({
    autoplay: true,
  }),
};
