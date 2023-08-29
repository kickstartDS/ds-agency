import { Header } from "./HeaderComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./header.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  title: "Components/Header",
  args,
  argTypes,
  component: Header,
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
