import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Features } from "./FeaturesComponent";
import schema from "./features.schema.json";

const meta: Meta<typeof Features> = {
  title: "Components/Features",
  component: Features,
  parameters: {
    jsonSchema: {
      schema,
    },
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Features>;

export const IconCentered: Story = {};
IconCentered.args = pack({
  style: "centered",
  layout: "smallTiles",
  features: [
    {
      icon: "home",
      title: "Feature 1",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
  ],
});

export const StackWithButton: Story = {};
StackWithButton.args = pack({
  style: "stack",
  ctas: {
    style: "button",
    toggle: "true",
  },
  features: [
    {
      icon: "home",
      title: "Feature 1",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
  ],
});

export const IconBesideWithLinkInText: Story = {};
IconBesideWithLinkInText.args = pack({
  style: "intext",
  ctas: {
    style: "intext",
    toggle: "true",
  },
  features: [
    {
      icon: "home",
      title: "Feature 1",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
  ],
});

export const IconIntextWithLink: Story = {};
IconIntextWithLink.args = pack({
  style: "intext",
  ctas: {
    style: "link",
    toggle: "true",
  },
  features: [
    {
      icon: "home",
      title: "Feature 1",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
      cta: {
        target: "/feature2",
        label: "Read more",
      },
    },
  ],
});
