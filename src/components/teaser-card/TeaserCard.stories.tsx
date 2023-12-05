import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { TeaserCard } from "./TeaserCardComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./teaser-card.schema.dereffed.json";

const meta: Meta<typeof TeaserCard> = {
  title: "Components/Teaser Card",
  ...getArgsShared(schema as JSONSchema7),
  component: TeaserCard,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TeaserCard>;

export const Card: Story = {};
Card.args = pack({
  headline: "Design System Services",
  text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
  target: "#",
  image: "img/close-up-young-business-team-working.png",
});

export const CardWithLabel: Story = {};
CardWithLabel.args = pack({
  headline: "Design System Services",
  text: "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
  target: "#",
  label: "CMS",
  image: "img/close-up-young-business-team-working.png",
});
