import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Hero } from "./HeroComponent";
import schema from "./hero.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/Hero",
  args,
  argTypes,
  component: Hero,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof Hero>;

export default meta;
export const TextBelowImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    largeHeadline: true,
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    textbox: false,
    overlay: true,
    height: "fullImage",
    textPosition: "below",
    image: {
      srcMobile: "img/colleagues-work-office-using-computers-looking-aside.jpg",
      srcTablet: "img/colleagues-work-office-using-computers-looking-aside.jpg",
      srcDesktop:
        "img/colleagues-work-office-using-computers-looking-aside.jpg",
    },
  }),
};

export const TextCenteredOverBackgroundImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    textbox: false,
    height: "fullImage",
    overlay: true,
    textPosition: "center",
    image: {
      srcMobile: "img/hero.png",
      srcTablet: "img/hero-centered.png",
      srcDesktop: "img/hero-centered.png",
    },
  }),
};

export const TextBoxOverBackgroundImage: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    textbox: true,
    overlay: true,
    textPosition: "left",
    image: {
      srcMobile: "img/colleagues-work-office-using-computers-looking-aside.jpg",
      srcTablet: "img/colleagues-work-office-using-computers-looking-aside.jpg",
      srcDesktop:
        "img/colleagues-work-office-using-computers-looking-aside.jpg",
    },
  }),
};
