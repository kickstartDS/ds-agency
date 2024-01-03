import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { TestimonialsPaid } from "./TestimonialsPaidComponent";

import schema from "./testimonials-paid.schema.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);

const meta: Meta<typeof TestimonialsPaid> = {
  title: "Paid Components/Testimonials",
  component: TestimonialsPaid,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof TestimonialsPaid>;

export const SliderLayout: Story = {
  args: pack({
    testimonials: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
      },
    ],
  }),
};

export const WithRating: Story = {
  args: pack({
    testimonials: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};

export const ListLayout: Story = {
  args: pack({
    layout: "list",
    testimonials: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};

export const AlternatingLayout: Story = {
  args: pack({
    layout: "alternating",
    testimonials: [
      {
        quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
        image: {
          src: "img/people/author-emily.png",
          alt: "Alt Text Customer 1",
        },
        name: "Emily Johnson",
        title: "Chief Marketing Officer at TechFusion Enterprises",
        rating: 5,
      },
      {
        quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
        image: {
          src: "img/people/author-john.png",
          alt: "Alt Text Customer 2",
        },
        name: "John Smith",
        title: "Director of Digital Strategy at EcoTech Solutions",
        rating: 4,
      },
      {
        quote: `As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.`,
        image: {
          src: "img/people/author-alex.png",
          alt: "Alt Text Customer 3",
        },
        name: "Alex Chen",
        title: "CEO of LaunchPad Innovations",
        rating: 5,
      },
    ],
  }),
};
