import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";
import { TestimonialsPaid } from "../testimonials-paid/TestimonialsPaidComponent"; // Added this line
import schema from "./section.schema.dereffed.json";
import { Section } from "./SectionComponent";
import { ImageText } from "../image-text/ImageTextComponent";
import { Headline } from "../headline/HeadlineComponent";

const meta: Meta<typeof Section> = {
  ...sectionStories,
  title: "Layout/Section",
  ...getArgsShared(schema as JSONSchema7),
  component: Section,
  parameters: {
    jsonschema: schema,
  },
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>
  ),
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Cards: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    buttons: [],
  }),
};

export const TeaserCardSlider: Story = {
  args: pack({
    content: {
      mode: "slider",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>
  ),
};

export const WithSpotlight: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    inverted: true,
    buttons: [],
  }),
};

export const Spotlight: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "Happy Customers Showcases",
      sub: "We can create something shining for you too!",
    },
    spotlight: true,
    buttons: [],
  }),
};

export const Stagelights: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    style: "stagelights",
    buttons: [],
  }),
};

export const AccentBackground: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    backgroundColor: "accent",
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    buttons: [],
  }),
};

export const BoldBackground: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    backgroundColor: "bold",
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    buttons: [],
  }),
};

export const ColorfulGradient: Story = {
  args: pack({
    content: {
      mode: "tile",
    },
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    style: "horizontalGradient",
    buttons: [],
  }),
};

export const WithCtas: Story = {
  args: pack({
    content: {
      mode: "default",
    },
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    buttons: [
      {
        label: "Convince yourself",
        icon: "phone",
      },
      {
        label: "Book a meeting",
        icon: "date",
      },
    ],
  }),
  render: (args) => (
    <Section {...args}>
      <TestimonialsPaid
        layout="slider"
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-emily.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Emily Johnson",
            quote:
              "Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
        ]}
      />
    </Section>
  ),
};

export const TileLayout: Story = {
  args: pack({
    width: "max",
    content: {
      mode: "tile",
    },
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
    </Section>
  ),
};

export const FlexLayout: Story = {
  args: pack({
    width: "max",
    content: {
      align: "center",
    },
    headline: {
      text: "No Agency site without some shiny happy Customer",
      sub: "AI-generated smiles, as you see them everywhere nowadays",
      align: "center",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
    </Section>
  ),
};

export const ListLayout: Story = {
  args: pack({
    content: {
      mode: "list",
    },
    headline: {
      text: "Our Services",
      sub: "Tailored Solutions for Seamless Digital Excellence",
      align: "center",
    },
    buttons: [],
  }),
  render: (args) => (
    <Section {...args}>
      <Headline text="Bringing Clarity to Your Vision" level={"h2"} />
      <ImageText
        layout="beside-right"
        text={`
Design System Consulting at Systemics is your compass in the world of design coherence. Our seasoned consultants work hand-in-hand with your team, understanding your brand's unique DNA and goals.

We align your vision with actionable strategies, ensuring your design system becomes a guiding light for your entire digital ecosystem. Our goal is to empower you with the knowledge and direction you need to create seamless, consistent, and captivating user experiences.
        `}
        image={{
          src: "img/ds-services-01.png",
          alt: "A group of designers having a creative meeting in a stylish modern room in a skyscraper, wide angle, blade runner movie like aesthetics, neon-light, lens-flare, pink, blue, and cyan color tonality, wide angle, sharp, ",
        }}
      />
      <Headline text="From Vision to Reality" level={"h2"} />
      <ImageText
        layout="beside-right"
        text={`
Our Design System Creation service is where ideas materialize into tangible results. We take your vision, weave it with industry best practices, and craft a comprehensive design system.

It's not just about visual consistency – it's about empowering your brand to communicate effectively and fostering user engagement. Our approach ensures your design system is not only user-centered but also accelerates your development cycles, giving you the competitive edge you deserve.
        `}
        image={{
          src: "img/ds-services-04.png",
          alt: "A view inside a web developer agency, like a film still from blade runner, lens-flare effect, Cinematic, Bokeh effect, Neon Lights",
        }}
      />
    </Section>
  ),
};
