import { Section } from "@kickstartds/base/lib/section";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Button } from "@kickstartds/base/lib/button";
import { CtaText } from "../components/cta-text/CtaTextComponent";

export default {
  title: "Pages/Landingpage"
};

const Page = () => (
  <>
    <Section
      width="default"
    >
      <CtaText
        align="left"
        headline="We simplify the process of building and scaling your **Design System**"
        text={`
Elevate your digital presence with us. We create impactful digital experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "#",
          icon: "person"
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "#",
          icon: "date"
        }}
        ctaToggle
      />
    </Section>

    <Section
      headline="Design System Services"
      sub="Crafting Consistency, Fostering Growth"
      width="default"
      align="left"
      mode="list"
    >
      <TextMedia
        text={`
Here at Systemics, we bring a range of design system services that can make a difference:

### 1. Design System Consulting
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.

### 2. Design System Creation & Development
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.

### 3. Headless CMS & Websites
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.

### 4. Design System Training
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.

Ready to make your digital journey exceptional?`}
        media={[
          {
            image: {
              src: "img/agency.png"
            }
          }
        ]}
      />
      <div>
        <Button variant="primary" label="Reach out today!" icon="chevron-right" />
      </div>
    </Section>
    <Section
      width="wide"
      style="accent"
      align="left"
      mode="list"
    >
      <TextMedia
        mediaAlignment="beside-right"
        text={`
## Our **Approach** to Design Systems
Own a design system without investing years of development. Our approach to design systems
We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever. `}
        media={[
          {
            image: {
              src: "img/agency.png"
            }
          }
        ]}
      />
    </Section>
    <Section
      width="wide"
      headline="3 Customer Show Cases"
      align="center"
    >
      <TeaserCard href="#" headline="Lorem Ipsum dolor" text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from" />
      <TeaserCard href="#" headline="Lorem Ipsum dolor" text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from" />
      <TeaserCard href="#" headline="Lorem Ipsum dolor" text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from" />
    </Section>
    <Section
      width="default"
      mode="list"
      headline="Testimonials"
      align="center"
    >
      <TextMedia
        mediaAlignment="beside-left"
        media={[
          {
            image: {
              src: "img/customer-1.png"
            }
          }
        ]}
        text={`**"Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating."**

John Smith, Chief Marketing Officer at TechFusion Enterprises`} />
      <TextMedia
        mediaAlignment="beside-right"
        media={[
          {
            image: {
              src: "img/customer-2.png"
            }
          }
        ]}
        text={`**"Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends."**

Emily Johnson, Director of Digital Strategy at EcoTech Solutions`} />
      <TextMedia
        mediaAlignment="beside-left"
        media={[
          {
            image: {
              src: "img/customer-3.png"
            }
          }
        ]}
        text={`**"As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market."**

Alex Chen, CEO of LaunchPad Innovations`} />
    </Section>
    <Section
      inverted
    >
      <CtaText
        align="left"
        headline="Get in touch and chat with us about getting your product or platform to market faster"
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "#",
          icon: "person"
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "#",
          icon: "date"
        }}
        ctaToggle
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
