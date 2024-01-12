import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Text } from "../components/text/TextComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      headline={{
        text: "Briefing:",
        sub: "Harmonize Techfusions Digital Landscape",
        width: "default",
        textAlign: "center",
        align: "left",
      }}
      spaceBefore="none"
      spaceAfter="small"
      width="default"
    >
      <Text
        align="center"
        highlightText
        text="EcoTech Solutions, a forward-thinking company in the sustainable PV and wind power industry, sought a way to streamline their development process and enhance their brand consistency across platforms."
      />
    </Section>

    <Section
      headline={{
        text: "**Result:**",
        textAlign: "center",
      }}
    >
      <Text
        text={`
The implementation of the new **Design System** and migration to **Storyblok** transformed EcoTech's development process. It introduced a level of consistency across their platforms that not only saved them time but also boosted their brand's credibility.
          `}
        align="center"
        highlightText
      />
    </Section>
    <Section spaceBefore="none" width="wide">
      <Testimonials
        testimonials={[
          {
            image: {
              src: "/img/people/author-emily.png",
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
    <Section
      width="wide"
      inverted
      style="boldTransition"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Cta
        highlightText
        textAlign="center"
        headline="Ready to **power up your**  Digital Transformation with a tailored **Design System** and Headless **CMS**? "
        sub="Connect with us to start your journey."
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
      width="wide"
      headline={{
        text: "More of our Demo Customer Showcases",
        textAlign: "center",
      }}
    >
      <TeaserCard
        target="#"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="#"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
    </Section>
    <Section>
      <Text
        align="center"
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm).`}
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

export const Showcase = {};
