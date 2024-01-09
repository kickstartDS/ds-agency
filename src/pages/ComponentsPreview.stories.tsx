import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { PreviewSection } from "../components/preview-section/PreviewSectionComponent";
import { PageIntro } from "../components/page-intro/PageIntroComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { TestimonialsPaid } from "../components/testimonials-paid/TestimonialsPaidComponent";

const Page = () => {
  return (
    <>
      <Header {...headerProps} floating />

      <PageIntro
        link={{
          href: "#",
          label: "All Components",
        }}
        headline="Discover the Cta Component"
        sub="7 examples"
      />

      <PreviewSection
        preview={{
          title: "Cards",
          type: "paid",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Inverted",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        inverted
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Spotlight",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        spotlight
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Stagelights",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        style="stagelights"
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Background Color Accent",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        backgroundColor="accent"
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Background Color Bold",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        backgroundColor="bold"
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Colorful Gradient",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        style="horizontalGradient"
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
        <TeaserCard
          headline="Saving Time and Money"
          image="/static/img/showcases/comp_eco01.jpg"
          target="#"
          text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "With Buttons",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        headline={{
          align: "center",
          sub: "AI-generated smiles, as you see them everywhere nowadays",
          text: "No Agency site without some shiny happy Customer",
        }}
        buttons={[
          {
            disabled: false,
            icon: "phone",
            label: "Convince yourself",
            size: "medium",
            variant: "secondary",
          },
          {
            disabled: false,
            icon: "date",
            label: "Book a meeting",
            size: "medium",
            variant: "secondary",
          },
        ]}
      >
        <TestimonialsPaid
          layout="slider"
          testimonials={[
            {
              image: {
                alt: "Fake Testimonial Portrait",
                src: "/static/img/people/author-emily.png",
              },
              name: "- Emily Johnson",
              quote:
                "Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
              title: "Director of Digital Strategy at EcoTech Solutions",
            },
          ]}
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Tile Layout",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
        content={{
          mode: "list",
        }}
      >
        <TeaserCard
          layout="row"
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          layout="row"
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "Flex Layout",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
        width="wide"
      >
        <TeaserCard
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
      </PreviewSection>
      <PreviewSection
        preview={{
          title: "List Layout",
          type: "free",
          contentToggle: true,
          link: {
            label: "View in Storybook",
            href: "#",
          },
        }}
        content={{
          mode: "list",
        }}
        headline={{
          sub: "We can create something shining for you too!",
          text: "Happy Customers Showcases",
        }}
        width="default"
      >
        <TeaserCard
          imageRatio="unset"
          layout="row"
          headline="Transformation Love Story"
          image="/static/img/showcases/comp_tfe01.jpg"
          target="#"
          text="See how we saved TechFusions a year's worth of development time"
        />
        <TeaserCard
          imageRatio="unset"
          layout="row"
          headline="Speed and Scale"
          image="/static/img/showcases/comp_audio01.jpg"
          label="Freshest Fruit"
          target="#"
          text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        />
      </PreviewSection>

      <Footer {...footerProps} />
    </>
  );
};

export default {
  title: "Pages/Components",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Preview = {};
