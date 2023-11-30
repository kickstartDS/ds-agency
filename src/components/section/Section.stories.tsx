import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import merge from "deepmerge";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import TeaserCardStory, {
  CardWithImage,
} from "../teaser-card/TeaserCard.stories";
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
      {new Array(3).fill(null).map((_, i) => (
        <TeaserCard
          {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
          key={i}
        />
      ))}
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

export const TeaserCardSlider: Story = {
  args: pack({
    content: {
      mode: "slider",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      {new Array(6).fill(null).map((_, i) => (
        <TeaserCard
          {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
          key={i}
        />
      ))}
    </Section>
  ),
};

export const WithSpotlight: Story = {
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
