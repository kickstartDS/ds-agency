import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Contact } from "./ContactComponent";
import schema from "./contact.schema.dereffed.json";
import customProperties from "./contact-tokens.json";

const meta: Meta = {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const WideImage: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Isabella Doe",
    subtitle: "Creative Director",
    image: {
      src: "img/people/contact-isabella.png",
      aspectRatio: "wide",
    },
    links: [
      {
        icon: "twitter",
        href: "#",
        label: "@Isabella_Doe",
      },
      {
        href: "mailto:mail@example.com",
        icon: "linkedin",
        label: "Isabella.Doe",
        newTab: false,
      },
    ],
  }),
};

export const CircularAvatar: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Jane Smith",
    subtitle: "CEO at DS Agency",
    image: {
      src: "img/people/author-emily.png",
    },
    copy: "Leads with a vision for innovative, user-centric web designs",
    links: [
      {
        icon: "twitter",
        href: "#",
        label: "@jane_smith",
      },
      {
        href: "mailto:mail@example.com",
        icon: "linkedin",
        label: "jane.smith",
        newTab: false,
      },
    ],
  }),
};

export const VerticalImageWithParagraph: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "John Smith",
    subtitle: "Sales Representative",
    image: {
      src: "img/people/contact-john.png",
      aspectRatio: "vertical",
    },
    copy: "Leads with a vision for innovative, user-centric web designs, ensuring each project merges creativity with functionality to deliver outstanding digital experiences.",
    links: [
      {
        href: "mailto:mail@example.com",
        icon: "xing",
        label: "john.smith",
        newTab: false,
      },
      {
        icon: "twitter",
        href: "#",
        label: "@john_smith",
      },
    ],
  }),
};

export const FullImageWidth: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    title: "Jim Johnsson",
    subtitle: "Lead Designer",
    image: {
      src: "img/people/contact-jim.png",
      aspectRatio: "wide",
      fullWidth: true,
    },
    copy: "Blends artistic flair with technical expertise, creating visually stunning and intuitive websites that captivate users and drive engagement.",
    links: [
      {
        href: "mailto:mail@example.com",
        icon: "email",
        label: "jim.johnsson@mail.com",
        newTab: false,
      },
      {
        icon: "facebook",
        href: "#",
        label: "@jim_johnsson",
      },
    ],
  }),
};
