import { Headline } from "./HeadlineComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import HeadlineStories from "@kickstartds/base/lib/headline/headline.stories";
import schema from "./headline.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  ...HeadlineStories,
  title: "Components/Headline",
  args,
  argTypes,
  component: Headline,
  parameters: {
    jsonschema: schema,
  },
};

export const H1 = {
  args: pack({
    level: "h1",
    style: "h1",
    text: "Headline level h1",
  }),
};

export const H2 = {
  args: pack({
    level: "h2",
    style: "h2",
    text: "Headline level h2",
  }),
};

export const H3 = {
  args: pack({
    level: "h3",
    style: "h3",
    text: "Headline level h3",
  }),
};

export const H4 = {
  args: pack({
    level: "h4",
    style: "h4",
    text: "Headline level h4",
  }),
};

export const Subheadline = {
  args: pack({
    text: "With a subheadline",
    sub: "This is a subheadline, displayed below the headline",
  }),
};

export const SubheadlineOrderSwapped = {
  args: pack({
    text: "With a swapped subheadline",
    sub: "This is a subheadline, displayed above the headline",
    switchOrder: true,
  }),
};

export const Markdown = {
  args: pack({
    text: "With *Markdown* use",
    sub: "This is a subheadline, displayed **below the headline**",
  }),
};
