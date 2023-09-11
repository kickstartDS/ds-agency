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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature1",
        label: "Read more",
      },
    },
    {
      icon: "map",
      title: "Feature 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "person",
      title: "Feature 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "star",
      title: "Feature 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
    {
      icon: "time",
      title: "Feature 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
      cta: {
        link: "/feature2",
        label: "Read more",
      },
    },
  ],
});
