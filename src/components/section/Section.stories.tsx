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
      <TeaserCard
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <TeaserCard
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <TeaserCard
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
    </Section>
  ),
};
export default meta;
type Story = StoryObj<typeof Section>;

export const TeaserCards: Story = {
  args: pack({
    headline: "Section headline",
    mode: "tile",
    buttons: [],
  }),
};

export const WithCtas: Story = {
  args: pack({
    headline: "Section headline",
    mode: "tile",
  }),
};
