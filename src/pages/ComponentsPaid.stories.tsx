import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { CtaPaid } from "../components/cta-paid/CtaPaidComponent";
import { useRef } from "react";

const Page = () => {
  const sectionRef = useRef(null);

  return (
    <>
      <Header {...headerProps} floating />
      <Section
        ref={sectionRef}
        spaceBefore="none"
        spaceAfter="none"
        width="full"
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

      <Section
        width="full"
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
      <Section
        width="full"
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
      <Section
        width="full"
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
