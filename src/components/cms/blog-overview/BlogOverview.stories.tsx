import type { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { getArgsShared, pack } from "@kickstartds/core/lib/storybook";

import { BlogOverview as BlogOverviewComponent } from "./BlogOverviewComponent";
import schema from "../blog-overview.schema.dereffed.json";

const meta: Meta<typeof BlogOverviewComponent> = {
  component: BlogOverviewComponent,
  title: "Pages/Archetypes",
  parameters: {
    jsonschema: { schema },
    layout: "fullscreen",
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof BlogOverviewComponent>;

export const BlogOverview: Story = {
  args: pack({
    latest: {
      date: "12/30/2022",
      tags: ["Design Systems", "Headless Websites", "Training"],
      headline:
        "Mastering the Art of Design Systems with Systemics: A Journey from Vision to Reality",
      teaserText:
        "In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence. We discuss our unique approach to Design System Consulting, where we align your vision with actionable strategies for seamless and captivating user experiences. Learn how we transform ideas into tangible results with our Design System Creation service, empowering your brand to communicate effectively across digital platforms.",
      image: "img/close-up-young-business-team-working.png",
      link: { url: "https://example.com/article1", label: "Read more" },
      readingTime: "5 min read",
      author: {
        name: "John Doe",
        title: "CEO",
        image: "img/people/author-alex.png",
      },
    },
    more: [
      {
        date: "12/30/2022",
        tags: ["Design Systems", "Headless Websites", "Training"],
        headline:
          "Mastering the Art of Design Systems with Systemics: A Journey from Vision to Reality",
        teaserText:
          "In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence. We discuss our unique approach to Design System Consulting, where we align your vision with actionable strategies for seamless and captivating user experiences. Learn how we transform ideas into tangible results with our Design System Creation service, empowering your brand to communicate effectively across digital platforms.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article1", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "John Doe",
          title: "CEO",
          image: "img/people/author-alex.png",
        },
      },
      {
        date: "12/30/2022",
        tags: ["Innovation", "Headless Websites", "Systemics"],
        headline:
          "Unleashing Innovation with Headless Websites: The Future of Digital Experiences",
        teaserText:
          "Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article2", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "Jane Doe",
          title: "CTO",
          image: "img/people/author-emily.png",
        },
      },
      {
        date: "12/30/2022",
        tags: ["Digital Excellence", "Systemics", "Design System Trainings"],
        headline:
          "Investing in Digital Excellence: Systemics' Design System Trainings",
        teaserText:
          "Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively. Understand how our trainings promote collaboration, shared understanding, and continuous learning, ensuring your design system remains an evolving cornerstone of your digital success.",
        image: "img/close-up-young-business-team-working.png",
        link: { url: "https://example.com/article3", label: "Read more" },
        readingTime: "5 min read",
        author: {
          name: "John Doe",
          title: "CEO",
          image: "img/people/author-alex.png",
        },
      },
    ],
  }),
};
