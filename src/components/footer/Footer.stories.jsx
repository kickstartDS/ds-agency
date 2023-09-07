import { Footer } from "./FooterComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./footer.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  title: "Layout/Footer",
  args,
  argTypes,
  component: Footer,
  parameters: {
    jsonschema: schema,
  },
};

export const Default = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    ctaLabel: "Get in touch",
    ctaToggle: true,
    ctaTarget: "#",
  }),
};
