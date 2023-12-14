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
        image="img/mosaic-1.png"
        headline="Innovative Solutions"
        text="We provide innovative solutions to complex business problems. Our team is dedicated to helping your business grow."
        target="#"
      />
      <TeaserCard
        image="img/mosaic-2.png"
        headline="Expert Teams"
        text="Our team of experts is always ready to provide top-notch services. We have the skills and experience to deliver exceptional results."
        target="#"
      />
      <TeaserCard
        image="img/mosaic-3.png"
        headline="Quality Services"
        text="We are committed to providing quality services. We strive for excellence in everything we do."
        target="#"
      />
    </Section>
  ),
};
export default meta;
type Story = StoryObj<typeof Section>;

export const TeaserCards: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    buttons: [],
  }),
};

export const SpotlightHover: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    spotlight: true,
  }),
};

export const WithCtas: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
  }),
};
