import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { CtaPaid } from "./CtaPaidComponent";
import schema from "./cta-paid.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/CTA",
  args,
  argTypes,
  component: CtaPaid,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof CtaPaid>;

export default meta;

export const ProductAdvertisement: Story = {
  args: pack({
    headline: "Experience Immersive Sound",
    sub: "With Our Premium Over-Ear Headphones",
    text: "Our over-ear headphones provide an immersive audio experience. With noise-cancellation technology and high-quality sound.",
    backgroundImage: "img/bg_dot-carpet-blue.svg",
    highlightText: true,
    width: "wide",
    order: {
      desktopImageLast: false,
    },
    image: {
      padding: false,
      src: "img/showcases/comp_audio04.png",
      alt: "Over-Ear Headphones",
    },
    buttons: [
      {
        label: "Shop Now",
        target: "/shop",
        variant: "primary",
        icon: "chevron-right",
      },
      {
        label: "Learn More",
        target: "/product-info",
        variant: "secondary",
      },
    ],
  }),
};

export const ContactBanner: Story = {
  args: pack({
    headline: "Get in touch",
    sub: "Chat with us about getting your product or platform to market faster",
    text: "Our modular design approach allows for flexibility and scalability in your application's architecture.",
    width: "wide",
    fullWidth: true,
    image: {
      src: "img/contact-person.png",
      padding: false,
    },
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        target: "#",
      },
      {
        label: "Book a meeting",
        icon: "date",
        target: "#",
      },
    ],
  }),
};

export const SplitBanner: Story = {
  args: pack({
    headline: "Design System Services",
    text: "Here at Systemics, we bring a range of design system services that can make a difference.",
    backgroundColor: "#001856",
    width: "wide",
    fullWidth: true,
    order: {
      desktopImageLast: false,
    },
    image: {
      src: "img/colored-square.png",
      padding: false,
    },
    buttons: [
      {
        label: "What can we do for you?",
        icon: "person",
        target: "#",
      },
    ],
  }),
};

export const AngledImage: Story = {
  args: pack({
    headline: "Our **Approach** to Design Systems",
    text: `We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems.

This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster.`,
    width: "wide",
    fullWidth: true,
    image: {
      src: "img/angled-image.png",
      padding: false,
    },
    order: {
      desktopImageLast: true,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        target: "#",
      },
      {
        label: "Book a meeting",
        icon: "date",
        target: "#",
      },
    ],
  }),
};

export const ColoredBanner: Story = {
  args: pack({
    headline: "Expertise in Scalable Solutions",
    text: "Leverage our expertise in creating scalable and robust applications using modern technologies.",
    highlightText: true,
    backgroundColor: "#a30051",
    buttons: [
      {
        label: "Learn More",
        target: "#",
      },
      {
        label: "Contact Us",
        target: "#",
      },
    ],
  }),
};

export const AlignBottom: Story = {
  args: pack({
    headline: "Custom Solutions",
    text: `At Systemics, we believe in the power of technology to transform businesses. Our team of experienced professionals is dedicated to providing innovative solutions that meet the unique needs of your business.

We understand that every business is different, and that's why we offer custom solutions tailored to your specific business needs and requirements.`,
    backgroundImage: "img/grid-bg.svg",
    width: "wide",
    fullWidth: true,
    contentAlign: "bottom",
    image: {
      src: "img/offset-image.png",
    },
    order: {
      desktopImageLast: false,
    },
    buttons: [
      {
        label: "Contact us",
        icon: "person",
        target: "#",
      },
      { label: "Book a meeting", icon: "date", target: "#" },
    ],
  }),
};
