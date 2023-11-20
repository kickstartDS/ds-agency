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

export const CardWithImage: Story = {};
CardWithImage.args = pack({
  headline: "TeaserCard headline",
  text: "TeaserCard text content that can be quite a bit longer, and use **Markdown**",
  target: "#",
  label: "label",
  image: "img/close-up-young-business-team-working.png",
});
