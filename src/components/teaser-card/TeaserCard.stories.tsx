import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { TeaserCard } from "./TeaserCardComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./teaser-card.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta<typeof TeaserCard> = {
  title: "Components/Teaser Card",
  args,
  argTypes,
  component: TeaserCard,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TeaserCard>;

export const ProductTiles: Story = {
  args: pack({
    headline: "Castaway",
    text: "Transforming Ideas into Code",
    image: "img/logos/castaway.svg",
    target: "#",
  }),
};

export const PageNavigation: Story = {
  args: pack({
    headline: "Design System Services",
    text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
    image: "img/02.jpg",
    imageRatio: "landscape",
    target: "#",
    button: {
      label: "Read more",
    },
  }),
};

export const ShowcasePreview: Story = {
  args: pack({
    label: "Tech",
    layout: "row",
    imageRatio: "wide",
    headline: "Transformation Love Story",
    text: "See how we saved TechFusions a year's worth of development time",
    image: "img/showcases/comp_tfe01.jpg",
    target: "#",
    button: {
      label: "Go to showcase",
    },
  }),
};
