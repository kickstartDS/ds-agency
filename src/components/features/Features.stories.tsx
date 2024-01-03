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
  layout: "largeTiles",
  features: [
    {
      icon: "home",
      title: "Scalable Architecture",
      text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
      cta: {
        target: "/feature1",
        label: "Learn more",
      },
    },
    {
      icon: "map",
      title: "Efficient Development",
      text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
      cta: {
        target: "/feature2",
        label: "Get started",
      },
    },
    {
      icon: "person",
      title: "Consistent UI",
      text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
      cta: {
        target: "/feature3",
        label: "Explore",
      },
    },
    {
      icon: "star",
      title: "Customizable Design",
      text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
      cta: {
        target: "/feature4",
        label: "Customize",
      },
    },
    {
      icon: "upload",
      title: "Cloud Ready",
      text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
      cta: {
        target: "/feature5",
        label: "Deploy",
      },
    },
    {
      icon: "login",
      title: "Secure",
      text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
      cta: {
        target: "/feature6",
        label: "Secure",
      },
    },
  ],
});

export const StackWithButton: Story = {};
StackWithButton.args = pack({
  style: "stack",
  layout: "smallTiles",
  ctas: {
    style: "button",
  },
  features: [
    {
      icon: "person",
      title: "Consistent UI",
      text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
      cta: {
        target: "/feature3",
        label: "Explore",
      },
    },
    {
      icon: "star",
      title: "Customizable Design",
      text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
      cta: {
        target: "/feature4",
        label: "Customize",
      },
    },
    {
      icon: "upload",
      title: "Cloud Ready",
      text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
      cta: {
        target: "/feature5",
        label: "Deploy",
      },
    },
    {
      icon: "login",
      title: "Secure",
      text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
      cta: {
        target: "/feature6",
        label: "Secure",
      },
    },
  ],
});

export const ListView: Story = {};
ListView.args = pack({
  style: "besideLarge",
  layout: "list",
  ctas: {
    style: "intext",
    toggle: false,
  },
  features: [
    {
      icon: "star",
      title: "Customizable Design",
      text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
      cta: {
        target: "/feature4",
        label: "Customize",
      },
    },
    {
      icon: "map",
      title: "Efficient Development",
      text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
      cta: {
        target: "/feature2",
        label: "Get started",
      },
    },
    {
      icon: "person",
      title: "Consistent UI",
      text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
      cta: {
        target: "/feature3",
        label: "Explore",
      },
    },

    {
      icon: "home",
      title: "Scalable Architecture",
      text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
      cta: {
        target: "/feature1",
        label: "Learn more",
      },
    },
    {
      icon: "upload",
      title: "Cloud Ready",
      text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
      cta: {
        target: "/feature5",
        label: "Deploy",
      },
    },
    {
      icon: "login",
      title: "Secure",
      text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
      cta: {
        target: "/feature6",
        label: "Secure",
      },
    },
  ],
});

export const IconBesideWithLinkInText: Story = {};
IconBesideWithLinkInText.args = pack({
  style: "intext",
  layout: "smallTiles",
  ctas: {
    style: "intext",
  },
  features: [
    {
      icon: "home",
      title: "Scalable Architecture",
      text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
      cta: {
        target: "/feature1",
        label: "Learn more",
      },
    },
    {
      icon: "map",
      title: "Efficient Development",
      text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
      cta: {
        target: "/feature2",
        label: "Get started",
      },
    },
    {
      icon: "person",
      title: "Consistent UI",
      text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
      cta: {
        target: "/feature3",
        label: "Explore",
      },
    },
    {
      icon: "star",
      title: "Customizable Design",
      text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
      cta: {
        target: "/feature4",
        label: "Customize",
      },
    },
    {
      icon: "upload",
      title: "Cloud Ready",
      text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
      cta: {
        target: "/feature5",
        label: "Deploy",
      },
    },
    {
      icon: "login",
      title: "Secure",
      text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
      cta: {
        target: "/feature6",
        label: "Secure",
      },
    },
  ],
});

export const IconIntextWithLink: Story = {};
IconIntextWithLink.args = pack({
  style: "intext",
  ctas: {
    style: "link",
  },
  features: [
    {
      icon: "star",
      title: "Customizable Design",
      text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
      cta: {
        target: "/feature4",
        label: "Customize",
      },
    },
    {
      icon: "map",
      title: "Efficient Development",
      text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
      cta: {
        target: "/feature2",
        label: "Get started",
      },
    },
    {
      icon: "person",
      title: "Consistent UI",
      text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
      cta: {
        target: "/feature3",
        label: "Explore",
      },
    },

    {
      icon: "upload",
      title: "Cloud Ready",
      text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
      cta: {
        target: "/feature5",
        label: "Deploy",
      },
    },
    {
      icon: "login",
      title: "Secure",
      text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
      cta: {
        target: "/feature6",
        label: "Secure",
      },
    },
  ],
});
