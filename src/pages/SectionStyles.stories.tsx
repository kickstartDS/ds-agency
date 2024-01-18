import { Section } from "../components/section/SectionComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      headerSpacing
      content={{
        mode: "list",
      }}
      width="default"
    >
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>
    <Section backgroundColor="accent" width="default">
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>
    <Section backgroundColor="bold" width="default">
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>
    <Section inverted width="default">
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>
    <Section backgroundColor="accent" inverted width="default">
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>
    <Section backgroundColor="bold" inverted width="default">
      <Cta
        textAlign="left"
        headline="We simplify the process of building and scaling your **Design System**"
        sub="Crafting Consistency, Fostering Growth"
        text={`
Elevate your digital presence with us. We create [impactful digital](#) experiences that deliver tangible results. With over 15+ years of expertise in design systems, headless CMSs, and frontend development, let's shape your digital future together.`}
        buttons={[
          {
            label: "Contact Us",
            target: "#",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "#",
            icon: "date",
          },
          {
            label: "Learn more",
            target: "#",
            icon: "chevron-right",
          },
        ]}
      />
    </Section>

    <Section width="wide">
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
    </Section>
    <Section inverted width="wide">
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
      <TeaserCard
        target="#"
        headline="Lorem Ipsum dolor"
        text="During more than a decade in the industry, we’ve been able to touch almost any aspect of digital products from"
      />
    </Section>
    <Section>
      <Testimonials
        testimonials={[
          {
            quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
            image: {
              src: "img/people/author-emily.png",
              alt: "Alt Text Customer 1",
            },
            name: "Emily Johnson",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
            image: {
              src: "img/people/author-john.png",
              alt: "Alt Text Customer 2",
            },
            name: "John Smith",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
        ]}
      />
    </Section>
    <Section inverted>
      <Testimonials
        testimonials={[
          {
            quote: `Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.`,
            image: {
              src: "img/people/author-emily.png",
              alt: "Alt Text Customer 1",
            },
            name: "Emily Johnson",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            quote: `Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.`,
            image: {
              src: "img/people/author-john.png",
              alt: "Alt Text Customer 2",
            },
            name: "John Smith",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
        ]}
      />
    </Section>

    <Section>
      <Faq
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
        ]}
      />
    </Section>
    <Section inverted>
      <Faq
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
        ]}
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

export const SectionStyles = {};
