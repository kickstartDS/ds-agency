import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import { Testimonials } from "../testimonials/TestimonialsComponent"; // Added this line
import schema from "./section.schema.dereffed.json";
import { Section } from "./SectionComponent";
import { ImageText } from "../image-text/ImageTextComponent";
import { Headline } from "../headline/HeadlineComponent";

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
        target="#"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="#"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        target="#"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
    </Section>
  ),
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Cards: Story = {
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
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
    </Section>
  ),
};

export const Inverted: Story = {
  args: pack({
    inverted: true,
  }),
};

export const Spotlight: Story = {
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
        target="#"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="#"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
    </Section>
  ),
};

export const FlexLayout: Story = {
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
        target="#"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        layout="row"
        target="#"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
    </Section>
  ),
};

export const ListLayout: Story = {
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
