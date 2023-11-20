import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { VideoCurtain } from "./VideoCurtainComponent";
import schema from "./video-curtain.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Paid Components/Video Curtain",
  args,
  argTypes,
  component: VideoCurtain,
  parameters: {
    jsonschema: schema,
  },
};
type Story = StoryObj<typeof VideoCurtain>;

export default meta;
export const AtmosphericVideoWithOverlay: Story = {
  args: pack({
    headline: "The Sanity & Next.js Experts",
    text: "Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites, web apps & composable architecture.",
    overlay: true,
    textPosition: "center",
    video: {
      srcMobile: "img/videos/video-agency.mp4",
      srcTablet: "img/videos/video-agency.mp4",
      srcDesktop: "img/videos/video-agency.mp4",
    },
  }),
};
