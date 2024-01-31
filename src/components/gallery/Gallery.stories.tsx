import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Gallery } from "./GalleryComponent";
import schema from "./gallery.schema.json";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  args,
  argTypes,
  component: Gallery,
  parameters: {
    jsonschema: schema,
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const SmallSquaresWithLightbox: Story = {
  parameters: {
    viewport: {
      width: 1100,
      height: 702,
    },
  },
  args: pack({
    aspectRatio: "square",
    layout: "smallTiles",
    lightbox: true,
    images: [
      {
        src: "img/close-up-young-business-team-working.png",
        caption: "Caption Image 1",
        alt: "Alt text Image 1",
      },
      {
        src: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
        caption: "Caption Image 2",
        alt: "Alt text Image 2",
      },
      {
        src: "img/full-shot-different-people-working-together.png",
        caption: "Caption Image 3",
        alt: "Alt text Image 3",
      },
      {
        src: "img/top-view-desk-with-keyboard-drawing-pad.png",
        caption: "Caption Image 4",
        alt: "Alt text Image 4",
      },
      {
        src: "img/people-brainstorming-work-meeting.png",
        caption: "Caption Image 5",
        alt: "Alt text Image 5",
      },
      {
        src: "img/view-modern-office.jpg",
        caption: "Caption Image 6",
        alt: "Alt text Image 6",
      },
      {
        src: "img/colleagues-work-office-using-computers-looking-aside.png",
        caption: "Caption Image 7",
        alt: "Alt text Image 7",
      },
    ],
  }),
};

export const LargeLandscapeTiles: Story = {
  parameters: {
    viewport: {
      width: 1440,
      height: 735,
    },
  },
  args: pack({
    layout: "largeTiles",
    aspectRatio: "landscape",
    images: [
      {
        src: "img/close-up-young-business-team-working.png",
        caption: "Caption Image 1",
        alt: "Alt text Image 1",
      },
      {
        src: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
        caption: "Caption Image 2",
        alt: "Alt text Image 2",
      },
      {
        src: "img/full-shot-different-people-working-together.png",
        caption: "Caption Image 3",
        alt: "Alt text Image 3",
      },
      {
        src: "img/top-view-desk-with-keyboard-drawing-pad.png",
        caption: "Caption Image 4",
        alt: "Alt text Image 4",
      },
      {
        src: "img/people-brainstorming-work-meeting.png",
        caption: "Caption Image 5",
        alt: "Alt text Image 5",
      },
      {
        src: "img/view-modern-office.jpg",
        caption: "Caption Image 6",
        alt: "Alt text Image 6",
      },
    ],
  }),
};

export const FreeAspectRatio: Story = {
  parameters: {
    viewport: {
      width: 1040,
      height: 779,
    },
  },
  args: pack({
    layout: "smallTiles",
    lightbox: true,
    images: [
      {
        src: "img/close-up-young-business-team-working.png",
        caption: "Caption Image 1",
        alt: "Alt text Image 1",
      },
      {
        src: "img/low-angle-tall-building-with-many-windows_23-2148230392.png",
        caption: "Caption Image 2",
        alt: "Alt text Image 2",
      },
      {
        src: "img/full-shot-different-people-working-together.png",
        caption: "Caption Image 3",
        alt: "Alt text Image 3",
      },
      {
        src: "img/top-view-desk-with-keyboard-drawing-pad.png",
        caption: "Caption Image 4",
        alt: "Alt text Image 4",
      },
      {
        src: "img/people-brainstorming-work-meeting.png",
        caption: "Caption Image 5",
        alt: "Alt text Image 5",
      },
      {
        src: "img/view-modern-office.jpg",
        caption: "Caption Image 6",
        alt: "Alt text Image 6",
      },
      {
        src: "img/colleagues-work-office-using-computers-looking-aside.png",
        caption: "Caption Image 7",
        alt: "Alt text Image 7",
      },
    ],
  }),
};

export const StackLandscape: Story = {
  parameters: {
    viewport: {
      width: 846,
      height: 1512,
    },
  },
  args: pack({
    aspectRatio: "landscape",
    images: [
      {
        src: "img/close-up-young-business-team-working.png",
        caption: "Caption Image 1",
        alt: "Alt text Image 1",
      },

      {
        src: "img/top-view-desk-with-keyboard-drawing-pad.png",
        caption: "Caption Image 2",
        alt: "Alt text Image 2",
      },
      {
        src: "img/people-brainstorming-work-meeting.png",
        caption: "Caption Image 3",
        alt: "Alt text Image 3",
      },
    ],
    layout: "stack",
  }),
};
