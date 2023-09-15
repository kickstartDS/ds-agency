import { Cta } from "./CtaComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./cta.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  title: "Components/Cta",
  args,
  argTypes,
  component: Cta,
  parameters: {
    jsonschema: schema,
  },
};

export const AlignLeft = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    secondaryCta: {
      label: "Contact us"
    }
  }),
};

export const AlignCenter = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    align: "center",
    secondaryCta: {
      label: "Contact us"
    }
  }),
};
