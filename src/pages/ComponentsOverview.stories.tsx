import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { ComponentTeaser } from "../components/component-teaser/ComponentTeaserComponent";

const Page = () => {
  return (
    <>
      <Header {...headerProps} />
      <Section
        headline={{
          text: "Explore Over 40 Unique Use Cases Across 16 Components",
          width: "default",
          large: true,
          align: "center",
        }}
        width="wide"
      >
        <ComponentTeaser
          title="CTA"
          text="9 Examples"
          image="img/component_screenshots/cta.png"
          target="#"
        />
        <ComponentTeaser
          title="Hero"
          text="3 Examples"
          image="img/component_screenshots/hero.png"
          target="#"
        />
        <ComponentTeaser
          title="Video Curtain"
          text="3 Examples"
          image="img/component_screenshots/video-curtain.png"
          target="#"
        />
        <ComponentTeaser
          title="Features"
          text="5 Examples"
          image="img/component_screenshots/features.png"
          target="#"
        />
        <ComponentTeaser
          title="Gallery"
          text="4 Examples"
          image="img/component_screenshots/gallery.png"
          target="#"
        />
        <ComponentTeaser
          title="Teaser Card"
          text="2 Examples"
          image="img/component_screenshots/teaser.png"
          target="#"
        />
        <ComponentTeaser
          title="Testimonials"
          text="7 Examples"
          image="img/component_screenshots/testimonials.png"
          target="#"
        />
        <ComponentTeaser
          title="Logos"
          text="6 Examples"
          image="img/component_screenshots/logos.png"
          target="#"
        />
        <ComponentTeaser
          title="Stats"
          text="4 Examples"
          image="img/component_screenshots/stats.png"
          target="#"
        />

        <ComponentTeaser
          title="Image Story"
          text="1 Example"
          image="img/component_screenshots/image-story.png"
          target="#"
        />
        <ComponentTeaser
          title="Mosaic"
          text="2 Examples"
          image="img/component_screenshots/mosaic.png"
          target="#"
        />
        <ComponentTeaser
          title="Faq"
          text="2 Examples"
          image="img/component_screenshots/faq.png"
          target="#"
        />
        <ComponentTeaser
          title="Button"
          text="4 Examples"
          image="img/component_screenshots/button.png"
          target="#"
        />
        <ComponentTeaser
          title="Text"
          text="4 Examples"
          image="img/component_screenshots/text.png"
          target="#"
        />
        <ComponentTeaser
          title="Image Text"
          text="2 Examples"
          image="img/component_screenshots/image-text.png"
          target="#"
        />
        <ComponentTeaser
          title="Image"
          text="3 Examples"
          image="img/component_screenshots/image.png"
          target="#"
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

export const Overview = {};
