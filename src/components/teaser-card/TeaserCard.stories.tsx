import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { TeaserCard } from "./TeaserCardComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./teaser-card.schema.dereffed.json";

const meta: Meta<typeof TeaserCard> = {
  title: "Components/Teaser Card",
  ...getArgsShared(schema as JSONSchema7),
  parameters: {
    conmponent: TeaserCard,
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TeaserCard>;

export const CardWithImage: Story = {};
CardWithImage.args = pack({
  headline: "TeaserCard headline",
  text: "TeaserCard text content that can be quite a bit longer, and use **Markdown**",
  target: "#",
  image:
    "https://images.unsplash.com/photo-1665125143199-a6b44a9e1b21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzUxNDQyOA&ixlib=rb-1.2.1&q=80&w=1080",
  inverted: false,
});
