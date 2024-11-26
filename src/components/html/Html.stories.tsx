import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Html } from "./HtmlComponent";
import schema from "./html.schema.dereffed.json";

const meta: Meta = {
  title: "Components/HTML",
  component: Html,
  parameters: {
    jsonschema: { schema },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Html>;

export const HTML: Story = {};

export const WithConsent: Story = {
  args: pack({
    html: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oGGIkuGY-7U?si=Y5_JHflGsNwRCLu_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    consent: true,
    consentText: "would you like to watch the youtube video?",
    consentButtonLabel: "yes!",
    consentBackgroundImage: "img/02.jpg",
  }),
};

export const WithScript: Story = {
  args: pack({
    html: `<script>alert("Hello :)")</script><p style="color: var(--ks-text-color-default);">Nice to meet you!</p>`,
    consent: true,
    consentButtonLabel: "Say hello",
  }),
};
