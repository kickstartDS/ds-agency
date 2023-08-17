import { CtaText } from "./CtaTextComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./cta-text.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);

const Template = (args) => <CtaText {...args} />;

export default {
  title: "Components/CtaText",
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
Default.args = pack({
  headline: "The Sanity & Next.js Experts",
  text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
  ctaLabel: "Get in touch",
  ctaToggle: true,
  ctaTarget: "#"
});
