import { Section } from "@kickstartds/base/lib/section";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { CtaText } from "../components/cta-text/CtaTextComponent";

export default {
  title: "Pages/Landingpage"
};

const Page = () => (
  <>
    <Section
      width="wide"
      align="left"
      spaceBefore="default"
      spaceAfter="small"
      mode="list"
    >

      <CtaText
        headline="The Sanity & Next.js Experts"
        text="Experience the speed & scalability unlike anything seen before with our Sanity CMS powered websites web apps & composable architecture."
        ctaLabel="Get in touch"
        ctaToggle
        ctaTarget="#"
      />
    </Section>

    <Section width="max">
      <LogoTiles
        logos={[
          {
            src: "img/logoipsum-244.svg"
          },
          {
            src: "img/logoipsum-286.svg"
          },
          {
            src: "img/logoipsum-297.svg"
          },
          {
            src: "img/logoipsum-250.svg"
          },
          {
            src: "img/logoipsum-217.svg"
          },
          {
            src: "img/logoipsum-212.svg"
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
    >
      <Storytelling
        box={{
          headline: {
            text: "Design to scale",
            sub: "We’re not a full service agency, we’re a specialised Studio in JAMstack website development and UI/UX design; . We do two things incredibly well:",
          },
          text: `We develop top tier, blazing fast websites that outperform your competition
1. We design and optimise the UI/UX of websites & web-apps to push conversion.
2. We’re big believers in sticking to what we're best at, which is why we pair with specialised web-platforms to ensure that all our work is industry leading.`
        }}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
