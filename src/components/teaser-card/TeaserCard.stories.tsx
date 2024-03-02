import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { TeaserCard } from "./TeaserCardComponent";
import schema from "./teaser-card.schema.dereffed.json";
import customProperties from "./teaser-card-tokens.json";

const meta: Meta<typeof TeaserCard> = {
  title: "Components/Teaser Card",
  component: TeaserCard,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof TeaserCard>;

export const ProductTiles: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 653,
    },
  },
  args: pack({
    headline: "Castaway",
    text: "Transforming Ideas into Code",
    image: "img/logos/castaway.svg",
    target: "#",
    button: {
      label: "Go to page",
      hidden: true,
    },
  }),
};

export const PageNavigation: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 678,
    },
  },
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
  parameters: {
    viewport: {
      width: 650,
      height: 750,
    },
  },
  args: pack({
    label: "Tech",
    layout: "row",
    imageRatio: "wide",
    headline: "Transformation Love Story",
    text: "See how we saved TechFusions a year's worth of development time",
    image: "img/showcases/comp_tfe01.jpg",
    target: "#",
    button: {
      label: "View showcase",
    },
  }),
};
