import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import schema from "./section.schema.dereffed.json";
import { Section } from "./SectionComponent";

const meta: Meta<typeof Section> = {
  ...sectionStories,
  title: "Layout/Section",
  ...getArgsShared(schema as JSONSchema7),
  component: Section,
  parameters: {
    jsonschema: schema,
  },
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
    </Section>
  ),
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Cards: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    buttons: [],
  }),
};

export const Slider: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 938,
    },
  },
  args: pack({
    content: {
      mode: "slider",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
    </Section>
  ),
};

export const Inverted: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    inverted: true,
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    buttons: [],
  }),
};

export const Spotlight: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    spotlight: true,
    buttons: [],
  }),
};

export const Stagelights: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    style: "stagelights",
    buttons: [],
  }),
};

export const AccentBackground: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    backgroundColor: "accent",
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [],
  }),
};

export const BoldBackground: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    backgroundColor: "bold",
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [],
  }),
};

export const ColorfulGradient: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    style: "horizontalGradient",
    buttons: [],
  }),
};

export const WithButtons: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 1016,
    },
  },
  args: pack({
    content: {
      mode: "default",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [
      {
        disabled: false,
        icon: "arrow-right",
        label: "All Showcases",
        size: "medium",
        variant: "secondary",
      },
      {
        disabled: false,
        icon: "date",
        label: "Book a meeting",
        size: "medium",
        variant: "secondary",
      },
    ],
  }),
};

export const TileLayout: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 445,
    },
  },
  args: pack({
    width: "max",
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
    </Section>
  ),
};

export const FlexLayout: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 928,
    },
  },
  args: pack({
    width: "max",
    content: {
      align: "center",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        layout="row"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        target="#"
        button={{
          label: "Go to Page",
          hidden: true,
        }}
      />
    </Section>
  ),
};

export const ListLayout: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 1658,
    },
  },
  args: pack({
    content: {
      mode: "list",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
      align: "center",
    },
    buttons: [],
  }),
};
