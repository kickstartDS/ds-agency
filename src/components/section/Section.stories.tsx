import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import merge from "deepmerge";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import TeaserCardStory, {
  CardWithImage,
} from "../teaser-card/TeaserCard.stories";
import schema from "./section.schema.dereffed.json";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";

const Section = sectionStories.component;
const Template = (args) => {
  return (
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
  );
};

const meta: Meta<typeof Section> = {
  ...sectionStories,
  title: "Layout/Section",
  ...getArgsShared(schema as JSONSchema7),
  component: Template,
  parameters: {
    jsonschema: schema,
  },
  render: Template,
};
export default meta;
type Story = StoryObj<typeof Section>;

export const TeaserCards: Story = {};
TeaserCards.args = pack({
  headline: "Section headline",
  mode: "tile",
  ctas: [],
});

export const WithCtas: Story = {};
WithCtas.args = pack({
  headline: "Section headline",
  mode: "tile",
  ctas: [
    {
      label: "Section CTA 1",
      target: "#",
    },
    {
      label: "Section CTA 2",
      target: "#",
    },
    {
      label: "Section CTA 3",
      target: "#",
    },
  ],
});
