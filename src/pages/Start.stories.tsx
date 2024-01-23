import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Faq } from "../components/faq/FaqComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";
import { Text } from "../components/text/TextComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Image } from "../components/image/ImageComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Logos } from "../components/logos/LogosComponent";

const Page = () => (
  <>
    <Header {...headerProps} floating />
    <Section
      headerSpacing
      style="stagelights"
      content={{
        width: "default",
        mode: "list",
      }}
    >
      <Cta
        headline="We simplify the process of building a **Design System**"
        sub="With your headless experts"
        text={`Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.`}
        highlightText
        buttons={[
          {
            label: "What can we do for you?",
            target: "#startit",
            icon: "chevron-down",
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
      spotlight
      id="startit"
      headline={{
        text: "Design System Services",
        sub: "Crafting Consistency, Fostering Growth",
        switchOrder: true,
        large: true,
      }}
      width="wide"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <ImageText
        image={{
          alt: "Photorealistic photography of a hyper modern design & web development agency, blade runner movie like aesthetics, neon-light, lens-flare, pink, blue, and cyan color tonality, wide angle",
          src: "/img/people/contact-us-person-smart.png",
        }}
        layout="beside-left"
        text="
**Ready to make your digital journey exceptional?**

## Here at Systemics, we bring a range of design system services that can make a difference."
      />
      <Features
        ctas={{
          style: "intext",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Read more",
              target: "/services",
            },
            icon: "place",
            text: "Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools!",
            title: "Design System Consulting",
          },
          {
            cta: {
              label: "Read more",
              target: "/services",
            },
            icon: "first-page",
            text: "We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms.",
            title: "Design System Development",
          },
          {
            cta: {
              label: "Read more",
              target: "/services",
            },
            icon: "browser",
            text: "We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.",
            title: "Headless CMS & Websites",
          },
          {
            cta: {
              label: "Read more",
              target: "/services",
            },
            icon: "person",
            text: "We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.",
            title: "Design System Training",
          },
        ]}
        layout="smallTiles"
        style="stack"
      />
    </Section>

    <Section style="accentTransition">
      <Logos
        tagline="Orgs we've helped saving time & money"
        align="center"
        logos={[
          {
            alt: "Logo 1",
            src: "/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/img/logos/logoipsum-286.svg",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      backgroundColor="accent"
      content={{
        mode: "list",
      }}
      headline={{
        text: "Our **Approach** to Design Systems",
        sub: "Own a design system without investing years of development.",
      }}
    >
      <Text
        text={`
We value efficiency without compromising quality. Our secret weapon? **kickstartDS**, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever. `}
        highlightText
      />
      <Image
        src="/img/infos/adapt_kickstartds_mobile_clear.svg"
        alt="Info graphic displaying the pains and gains of adopting, adapting or creating an own design system vs. what you gain relying on kickstartDS for this as a meta framework for design system creation "
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Happy Customers Showcases",
        sub: "We can create something shining for you too!",
      }}
    >
      <TeaserCard
        button={{
          label: "TEST1",
        }}
        target="/showcase-techfusion"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section
      width="wide"
      content={{
        mode: "list",
      }}
      headline={{
        text: "No Agency site without some shiny happy Customer",
        sub: "AI-generated smiles, as you see them everywhere nowadays",
      }}
    >
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
          {
            image: {
              src: "/img/people/author-john.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- John Smith",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              src: "/img/people/author-alex.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </Section>

    <Section inverted>
      <Cta
        headline="Get in touch and chat with us about getting your product or platform to market faster"
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
      content={{
        align: "center",
        width: "default",
      }}
      headline={{
        text: "Design Systems, all you need to know",
        sub: "Design Systems have gained popularity due to the growing need for consistency, efficiency, and scalability in digital product development.",
        large: true,
      }}
    >
      <Faq
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
          {
            question: "What are the benefits of investing in a Design System?",
            answer:
              "Investing in a Design System offers numerous benefits, including increased efficiency, improved collaboration, enhanced consistency, and streamlined workflows. It ensures a unified brand voice, facilitates faster product development, and enables teams to create scalable, maintainable, and adaptable digital experiences.",
          },
          {
            question:
              "How does it help enterprise companies with complex SaaS products?",
            answer:
              "We assist enterprise companies by creating tailored Design Systems that cater to the unique requirements of their complex SaaS products. Our approach involves understanding the product's goals, user needs, and brand identity, and then crafting a comprehensive Design System that streamlines workflows, enhances collaboration, and ensures a consistent user experience.",
          },
          {
            question: "Is a Design System not too expensive for a Startup?",
            answer:
              "While Design Systems may initially seem expensive, they are a long-term investment that can save startups time, resources, and money in the long run. By establishing a solid foundation for design and development, startups can reduce inconsistencies, minimize rework, and improve overall product quality, which ultimately leads to a more successful and sustainable business.",
          },
          {
            question: "How long does a Design System take to build?",
            answer:
              "The time required to build a Design System varies depending on the project's complexity, scope, and specific requirements. On average, a Design System can take anywhere from a few weeks to several months to develop. However, it is essential to remember that a Design System is an evolving entity that requires ongoing maintenance and updates.",
          },
          {
            question:
              "What's the difference between a Design System and a Style Guide?",
            answer:
              "A Style Guide is a subset of a Design System, focusing primarily on the visual aspects of a brand, such as colors, typography, and iconography. A Design System, on the other hand, is a more comprehensive framework that encompasses not only visual elements but also components, patterns, guidelines, and tools for design, development, and content creation.",
          },
          {
            question: "How much does a Design System cost?",
            answer:
              "The cost of a Design System varies depending on factors such as project scope, complexity, and specific requirements. It is essential to view a Design System as a long-term investment that yields significant returns in terms of improved efficiency, reduced rework, and enhanced brand consistency. If you start at zero and the design system should serve at least 5 digital touchpoints, it could take months to years to develop all the code base. We believe in tailored solutions, so get in touch with us to discuss your specific requirements. As we work with kickstartDS, you can save lots of money because all the main concepts and aspects are already covered. Invest in its paid modules is really low in comparison to the development time you normally need to spend. For the rest, we'll provide you with a transparent, customized quote that aligns with your goals.",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="small"
      content={{
        width: "wide",
        align: "center",
      }}
    >
      <Image
        src="/img/office-divider-dotted.png"
        alt="Photorealistic image Super wide scale of a view into a hyper modern design & web development agency, glass walls, no people, wide angle, blade runner movie like aesthetics, neon-light, lens-flare, pink, blue, and cyan color tonality, wide angle, sharp, "
      />
    </Section>

    <Section
      headline={{
        text: "Headless CMS for the modern web",
        sub: "Frequently asked questions",
        align: "right",
        width: "default",
      }}
    >
      <Faq
        questions={[
          {
            question: "How do Headless CMSs fit into the picture?",
            answer:
              "A Headless CMS fits perfectly into the picture by offering a content-first approach that complements a Design System. It decouples the back-end content repository from the front-end presentation layer, allowing for seamless integration with any design system. The result is a flexible, scalable, and platform-agnostic system that ensures content consistency across all platforms and devices.",
          },
          {
            question:
              "How does the combination of Headless CMS and Design System create value?",
            answer:
              "The combination of a Headless CMS and a Design System creates value by enhancing efficiency, consistency, and scalability. A Headless CMS allows for seamless content management across various platforms, while a Design System ensures a consistent user experience and brand identity. Together, they enable teams to create and manage digital experiences more effectively, resulting in improved user engagement and business growth.",
          },
          {
            question: "Is transitioning to a Headless Web complicated?",
            answer:
              "Transitioning to a Headless Web can be a significant change, but it doesn't have to be complicated. With the right planning, tools, and expertise, the transition can be smooth and beneficial. It's about understanding your specific needs and goals, choosing the right Headless CMS, and effectively integrating it with your Design System.",
          },
          {
            question:
              "How can I ensure a consistent design across various channels with a Headless Web setup? ",
            answer:
              "Ensuring a consistent design across various channels with a Headless Web setup is achieved through the integration of a Design System. The Design System serves as a single source of truth for design elements and guidelines, ensuring a unified brand identity and user experience across all platforms and devices. Combined with the platform-agnostic nature of a Headless CMS, you can deliver a consistent and engaging user experience across all channels.",
          },
        ]}
      />
    </Section>

    <Section backgroundColor="accent">
      <Cta
        textAlign="center"
        headline="Ready to embark on a transformative digital journey?"
        text="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
        highlightText
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

export const Start = {};
