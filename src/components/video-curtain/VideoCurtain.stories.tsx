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
    headline: "Step into Our Innovative Workspace",
    sub: "Where Creativity Meets Technology",
    text: "Experience the fusion of creativity and technology in our state-of-the-art office.",
    overlay: true,
    textPosition: "center",
    buttons: [
      {
        label: "Explore More",
      },
    ],
    video: {
      srcMobile: "img/videos/video-720.mp4",
      srcTablet: "img/videos/video-720.mp4",
      srcDesktop: "img/videos/video-720.mp4",
    },
  }),
};

export const ColorNeutralText: Story = {
  args: pack({
    headline: "Join Our Creative Journey",
    sub: "Where Every Idea Matters",
    text: "Be part of a creative journey where every idea is valued and innovation is celebrated.",
    textPosition: "left",
    colorNeutral: true,
    highlightText: true,
    overlay: true,
    buttons: [
      {
        label: "Join Us",
      },
    ],
    video: {
      srcMobile: "img/videos/video-agency.mp4",
      srcTablet: "img/videos/video-agency.mp4",
      srcDesktop: "img/videos/video-agency.mp4",
    },
  }),
};

export const ColorNeutralVideo: Story = {
  args: pack({
    headline: "Welcome to Our Collaborative Space",
    sub: "Where Ideas Come to Life",
    text: "Experience the synergy of creativity and teamwork in our modern office environment.",
    textPosition: "center",
    highlightText: true,
    overlay: true,
    buttons: [
      {
        label: "Discover More",
      },
    ],
    video: {
      srcMobile: "img/videos/handshake-bw.mp4",
      srcTablet: "img/videos/handshake-bw.mp4",
      srcDesktop: "img/videos/handshake-bw.mp4",
    },
  }),
};
