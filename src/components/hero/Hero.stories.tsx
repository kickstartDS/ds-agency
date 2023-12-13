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
    highlightText: true,
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    textbox: false,
    overlay: true,
    textPosition: "below",
    image: {
      srcMobile: "img/colleagues-work-office-using-computers-looking-aside.png",
      srcTablet: "img/colleagues-work-office-using-computers-looking-aside.png",
      srcDesktop:
        "img/colleagues-work-office-using-computers-looking-aside.png",
    },
    buttons: [
      {
        label: "Explore further",
        icon: "arrow-down",
        target: "#",
      },
    ],
  }),
};

export const TextOnImageWithOverlay: Story = {
  args: pack({
    headline: "Master Scalable Solutions",
    text: "Harness our expertise in crafting scalable and robust applications using cutting-edge technologies.",
    textbox: false,
    height: "fullImage",
    overlay: true,
    textPosition: "center",
    image: {
      srcMobile: "img/top-view-desk-with-keyboard-drawing-pad.png",
      srcTablet: "img/top-view-desk-with-keyboard-drawing-pad.png",
      srcDesktop: "img/top-view-desk-with-keyboard-drawing-pad.png",
    },

    buttons: [
      {
        label: "Meet Us",
        icon: "person",
        target: "#",
      },
      {
        label: "Schedule a Meeting",
        icon: "date",
        target: "#",
      },
    ],
  }),
};

export const TextBoxOnFullScreen: Story = {
  args: pack({
    headline: "Discover Our Design System",
    sub: "Scalable. Efficient. Seamless.",
    text: "Our design system provides a seamless and efficient framework for building scalable applications. Experience unprecedented speed and scalability with our Headless CMS powered websites, web apps & composable architecture.",
    textbox: true,
    height: "fullScreen",
    highlightText: false,
    textPosition: "left",
    image: {
      srcMobile: "img/people-brainstorming-work-meeting.png",
      srcTablet: "img/people-brainstorming-work-meeting.png",
      srcDesktop: "img/people-brainstorming-work-meeting.png",
    },
    buttons: [
      {
        label: "Discover More",
        icon: "arrow-right",
        target: "#",
      },
      {
        label: "Reach Out",
        icon: "phone",
        target: "#",
      },
    ],
  }),
};
