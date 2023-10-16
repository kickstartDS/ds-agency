import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { ImageStory } from "./ImageStoryComponent";
import schema from "./image-story.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/Image Story",
  args,
  argTypes,
  component: ImageStory,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof ImageStory>;

export default meta;

export const StickyImageNextToScrollingText: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: `
Here at Systemics, we bring a range of design system services that can make a difference:

### 1. Design System Consulting
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.

### 2. Design System Creation & Development
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.

### 3. Headless CMS & Websites
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.

### 4. Design System Training
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.

Ready to make your digital journey exceptional?
    `,
    largeHeadline: true,
    image: {
      order: {
        desktopImageLast: false,
      },
    },
    width: "wide",
    ctas: [
      {
        label: "Learn More",
        target: "#",
      },
      {
        label: "Contact Us",
        target: "#",
      },
    ],
  }),
};
