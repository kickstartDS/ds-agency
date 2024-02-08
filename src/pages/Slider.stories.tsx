import { Section } from "../components/section/SectionComponent";
import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section
      content={{
        mode: "slider",
        tileWidth: "large",
      }}
      headline={{
        text: "Section Slider",
      }}
    >
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
    </Section>
    <Section
      content={{
        mode: "slider",
        tileWidth: "medium",
      }}
      width="narrow"
      headline={{
        text: "Section Slider",
      }}
    >
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
    </Section>
    <Section
      content={{
        mode: "slider",
        tileWidth: "default",
      }}
      width="narrow"
      headline={{
        text: "Section Slider",
      }}
    >
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
      <TeaserCard
        layout="row"
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
        button={{
          label: "Go to showcase",
          hidden: true,
        }}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Pages/Testing",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Slider = {};
