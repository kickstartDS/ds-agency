import { Visual } from "./VisualComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./visual.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

export default {
  title: "Components/Visual",
  args,
  argTypes,
  component: Visual,
  parameters: {
    jsonschema: schema,
  },
};

export const BackgroundImage = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    media: {
      mode: "image",
      image: {
        srcMobile: "img/agency.svg",
        srcTablet: "img/visual-tablet.svg",
        srcDesktop: "img/visual.svg",
      }
    }
  }),
};
