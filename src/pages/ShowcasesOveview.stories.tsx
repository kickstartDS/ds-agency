import { Section } from "../components/section/SectionComponent";
import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Hero } from "../components/hero/HeroComponent";
import { Mosaic } from "../components/mosaic/MosaicComponent";
import { Text } from "../components/text/TextComponent";
import { LogosPaid } from "../components/logos-paid/LogosPaidComponent";
import { CtaPaid } from "../components/cta-paid/CtaPaidComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      spaceBefore="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <Hero
        height="fullScreen"
        image={{
          alt: undefined,
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop:
            "img/colleagues-work-office-using-computers-looking-aside.png",
          srcMobile:
            "img/colleagues-work-office-using-computers-looking-aside.png",
          srcTablet:
            "img/colleagues-work-office-using-computers-looking-aside.png",
        }}
        highlightText
        overlay
        headline="Transformations powered by 💗, Innovation & Design Systems"
        sub="Selected showcases from Design Systems and headless Webs of the biggest global Enterprises 😁"
        textPosition="below"
        text={`Welcome to our showcase of success stories. Here, you'll discover how we've partnered with diverse organizations to revolutionize their digital landscapes. From creating bespoke design systems to implementing headless CMSs, our solutions have empowered brands to streamline processes, enhance user experiences, and foster brand consistency. Dive in to explore how we've turned challenges into opportunities, and visions into reality.`}
      />
    </Section>

    <Section
      content={{
        mode: "list",
      }}
      width="default"
      spaceBefore="none"
    >
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Speed and Scale"
        text="Explore how we empowered LaunchPad, an AI-powered digital audio controller startup, with rapid landing page creation for market testing and a robust foundation for future growth."
        target="https://github.com/"
        image="img/showcases/preview_audio-01.png"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Navigating the Headless Frontier for Brand Consistency"
        text="See how we collaborated with EcoTech Solutions to set up a tailored Design System and migrate their main website to a headless CMS, enhancing brand credibility and saving valuable time."
        target="https://github.com/"
        image="img/showcases/preview_eco-01.png"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="TechFusion Enterprises"
        text="Discover how we revolutionized TechFusion Enterprises' digital landscape by developing a tailored Design System. Our innovative approach saved them a year's worth of development time and harmonized their user experiences across all platforms."
        target="https://github.com/"
        image="img/showcases/preview_tfe-01.png"
      />
    </Section>

    <Section
      style="accentTransition"
      spaceBefore="small"
      spaceAfter="none"
      width="max"
    >
      <Mosaic
        tiles={[
          {
            headline: "A Digital Transformation Love Story",
            sub: "TechFusion Enterprises",
            text: "Discover how we revolutionized TechFusion Enterprises' digital landscape by developing a tailored Design System. Our innovative approach saved them a year's worth of development time and harmonized their user experiences across all platforms.",
            image: {
              src: "img/showcases/preview_tfe.png",
            },
            backgroundColor: "#670A82",
            backgroundImage: "img/showcases/tfe_bg.svg",

            button: {
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
              target: "/showcase-techfusion",
            },
          },
          {
            headline: "Speed and Scale",
            sub: "LaunchPad Audio Innovations",
            text: "Explore how we empowered LaunchPad, an AI-powered digital audio controller startup, with rapid landing page creation for market testing and a robust foundation for future growth.",
            image: {
              src: "img/showcases/preview_audio.png",
            },
            backgroundColor: "#0101A3",
            backgroundImage: "img/showcases/audio_bg.svg",
            button: {
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
              target: "/showcase-launchpad",
            },
          },
          {
            headline: "Navigating the Headless Frontier for Brand Consistency",
            sub: "EcoTech Solutions",
            text: "See how we collaborated with EcoTech Solutions to set up a tailored Design System and migrate their main website to a headless CMS, enhancing brand credibility and saving valuable time.",
            image: {
              src: "img/showcases/preview_eco.png",
            },
            backgroundColor: "#21331E",
            backgroundImage: "img/showcases/eco_bg.png",
            button: {
              target: "/showcase-eco",
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
            },
          },
        ]}
      />
    </Section>

    <Section
      spaceBefore="small"
      spaceAfter="none"
      backgroundColor="accent"
      style="anchorGlow"
      width="wide"
    >
      <CtaPaid
        fullWidth
        textAlign="center"
        highlightText
        headline="Ready to embark on a transformative digital journey?"
        sub="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
        buttons={[
          {
            label: "Contact us",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "date",
          },
        ]}
      />
    </Section>

    <Section
      spaceAfter="none"
      width="wide"
      headline={{
        align: "center",
        text: "**More Sucess Stories incoming**",
      }}
    >
      <LogosPaid
        align="center"
        logos={[
          {
            alt: "Logo 1",
            src: "img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "img/logos/logoipsum-286.svg",
          },
          {
            alt: "Logo 7",
            src: "img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 8",
            src: "img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 9",
            src: "img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 10",
            src: "img/logos/logoipsum-244.svg",
          },
        ]}
        logosPerRow={4}
        tagline=""
      />
    </Section>

    <Section>
      <Text
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
        align="center"
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Pages/Pages",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const ShowcasesOverview = {};
