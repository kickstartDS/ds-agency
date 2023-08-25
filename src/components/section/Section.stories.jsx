import merge from "deepmerge";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import TeaserCardStory, {
  CardWithImage,
} from "../teaser-card/TeaserCard.stories";
import schema from "./section.schema.dereffed.json";

const Section = sectionStories.component;
CardWithImage.displayName = "Teaser Card";
const Template = (args) => {
  return (
    <Section {...args}>
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
      <CardWithImage
        {...merge(TeaserCardStory.args, unpack(CardWithImage.args))}
      />
    </Section>
  );
};

const { args, argTypes } = getArgsShared(schema);

export default {
  ...sectionStories,
  title: "Layout/Section",
  args,
  argTypes,
  component: Template,
  parameters: {
    jsonschema: schema,
  },
};

export const TeaserCards = {
  args: pack({
    headline: "Section headline",
    mode: "tile",
    ctas: [],
  }),
};

export const WithCtas = {
  args: pack({
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
  }),
};
