import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { CtaPaid } from "../components/cta-paid/CtaPaidComponent";
import { Divider } from "@kickstartds/base/lib/divider";
import { SectionHeader } from "../components/section-header/SectionHeader";

const Page = () => {
  return (
    <>
      <Header {...headerProps} />
      <Section
        spaceAfter="none"
        width="max"
        content={{
          width: "narrow",
          align: "left",
        }}
      >
        <SectionHeader
          headline="Cta Component"
          sub="7 Examples"
          text="The CtaPaidComponent is a React component that is used to create a Call to Action (CTA) section on a webpage. It is designed to be highly customizable and flexible, allowing for a variety of configurations to suit different use cases."
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        spaceBefore="none"
        spaceAfter="none"
        width="full"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          backgroundImage="img/bg_dot-carpet-blue.svg"
          buttons={[
            {
              icon: "chevron-right",
              label: "Shop Now",
              target: "/shop",
            },
            {
              label: "Learn More",
              target: "/product-info",
            },
          ]}
          contentAlign="center"
          headline="Experience Immersive Sound"
          highlightText
          image={{
            alt: "Over-Ear Headphones",
            padding: false,
            src: "img/showcases/comp_audio04.png",
          }}
          order={{
            desktopImageLast: false,
            mobileImageLast: false,
          }}
          sub="With Our Premium Over-Ear Headphones"
          text="Our over-ear headphones provide an immersive audio experience. With noise-cancellation technology and high-quality sound."
          textAlign="left"
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        width="full"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          buttons={[
            {
              icon: "person",
              label: "Contact us",
              target: "#",
            },
            {
              icon: "date",
              label: "Book a meeting",
              target: "#",
            },
          ]}
          contentAlign="center"
          fullWidth
          headline="Get in touch"
          image={{
            padding: false,
            src: "img/contact-person.png",
          }}
          order={{
            desktopImageLast: false,
            mobileImageLast: false,
          }}
          sub="Chat with us about getting your product or platform to market faster"
          text="Our modular design approach allows for flexibility and scalability in your application's architecture."
          textAlign="left"
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        width="wide"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          backgroundColor="#001856"
          buttons={[
            {
              icon: "person",
              label: "What can we do for you?",
              target: "#",
            },
          ]}
          colorNeutral
          contentAlign="center"
          fullWidth
          headline="Design System Services"
          image={{
            padding: false,
            src: "img/colored-square.png",
          }}
          order={{
            desktopImageLast: false,
            mobileImageLast: false,
          }}
          text="Here at Systemics, we bring a range of design system services that can make a difference."
          textAlign="left"
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        width="full"
        backgroundColor="accent"
        spaceAfter="none"
        spaceBefore="none"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          buttons={[
            {
              icon: "person",
              label: "Contact us",
              target: "#",
            },
            {
              icon: "date",
              label: "Book a meeting",
              target: "#",
            },
          ]}
          contentAlign="center"
          fullWidth
          headline="Our **Approach** to Design Systems"
          image={{
            padding: false,
            src: "img/angled-image.png",
          }}
          order={{
            desktopImageLast: true,
            mobileImageLast: false,
          }}
          text="We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems.

This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster."
          textAlign="left"
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        width="full"
        spaceAfter="none"
        spaceBefore="none"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          backgroundColor="#a30051"
          buttons={[
            {
              label: "Learn More",
              target: "#",
            },
            {
              label: "Contact Us",
              target: "#",
            },
          ]}
          colorNeutral
          contentAlign="center"
          headline="Expertise in Scalable Solutions"
          highlightText
          image={{
            padding: true,
          }}
          order={{
            desktopImageLast: true,
            mobileImageLast: false,
          }}
          text="Leverage our expertise in creating scalable and robust applications using modern technologies."
          textAlign="left"
        />
      </Section>

      <Section width="full">
        <Divider />
      </Section>

      <Section
        width="full"
        spaceAfter="none"
        spaceBefore="none"
        invertToggle
        content={{
          mode: "list",
        }}
      >
        <CtaPaid
          backgroundImage="img/grid-bg.svg"
          buttons={[
            {
              icon: "person",
              label: "Contact us",
              target: "#",
            },
            {
              icon: "date",
              label: "Book a meeting",
              target: "#",
            },
          ]}
          contentAlign="bottom"
          fullWidth
          headline="Custom Solutions"
          image={{
            padding: true,
            src: "img/offset-image.png",
          }}
          order={{
            desktopImageLast: false,
            mobileImageLast: false,
          }}
          text="At Systemics, we believe in the power of technology to transform businesses. Our team of experienced professionals is dedicated to providing innovative solutions that meet the unique needs of your business.

We understand that every business is different, and that's why we offer custom solutions tailored to your specific business needs and requirements."
          textAlign="left"
        />
      </Section>

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

export const Paid = {};
