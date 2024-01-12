import { Section } from "../components/section/SectionComponent";
import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Text } from "../components/text/TextComponent";
import { Logos } from "../components/logos/LogosComponent";
import { Cta } from "../components/cta/CtaComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />

    <Section
      spaceBefore="small"
      spaceAfter="none"
      backgroundColor="accent"
      style="anchorGlow"
      width="wide"
    >
      <Cta
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
      <Logos
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
