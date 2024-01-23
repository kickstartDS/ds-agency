import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Text } from "../components/text/TextComponent";
import { Image } from "../components/image/ImageComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Image
        src="/static/img/showcases/comp_eco01.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      backgroundColor="accent"
      content={{
        mode: "list",
      }}
      spaceAfter="default"
      inverted
      headline={{
        text: "Powering EcoTech Solutions' Digital Transformation with a **Design System** and **Headless CMS**",
        sub: "**Reinventing Development Processes, Boosting Brand Credibility, and Embracing the Headless Web**",
      }}
    >
      <Text
        text={`
### Briefing:
EcoTech Solutions, a forward-thinking company in the sustainable PV and wind power industry, sought a way to streamline their development process and enhance their brand consistency across platforms.
          `}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_eco02.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      content={{
        mode: "list",
      }}
      spaceAfter="default"
    >
      <Text
        text={`
### Our Solution:
We collaborated closely with EcoTech's brand team to set up a Design System that catered to their unique needs. To bring this Design System to life and enhance productivity, we migrated their main website to Storyblok, a robust Headless CMS. This strategic move marked their initial step towards embracing the headless web.
          `}
      />
      <Testimonials
        items={[
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

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_eco03.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="narrow"
      content={{
        mode: "list",
      }}
      spaceAfter="default"
      inverted
    >
      <Text
        text={`
### **Result:**
The implementation of the new **Design System** and migration to **Storyblok** transformed EcoTech's development process. It introduced a level of consistency across their platforms that not only saved them time but also boosted their brand's credibility.
          `}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_eco04.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section inverted backgroundColor="accent">
      <Cta
        headline="Ready to **power up your**  Digital Transformation with a tailored **Design System** and Headless **CMS**? "
        text="Connect with us to start your journey."
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
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
        target="#"
        button={{
          label: "View showcase",
          chevron: true,
        }}
      />
      <TeaserCard
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
        target="#"
        button={{
          label: "View showcase",
          chevron: true,
        }}
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
  title: "Pages/Archetypes",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Content = {};
