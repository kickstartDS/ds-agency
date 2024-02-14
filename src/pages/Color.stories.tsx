import "./design-token.scss";
import { Section } from "../components/section/SectionComponent";
import { Button } from "@kickstartds/base/lib/button";

const Page = () => (
  <>
    <Section
      headline={{
        text: "Background Color Primary",
      }}
    >
      <div className="background-color background-color-primary">Static</div>
      <Button
        label="Interactive"
        className="background-color background-color-primary-interactive"
      />
    </Section>

    <Section
      headline={{
        text: "Border Color Primary",
      }}
    >
      <div className="border-color border-color-primary">Static</div>
      <Button
        label="Interactive"
        className="border-color border-color-primary-interactive"
      />
    </Section>

    <Section
      headline={{
        text: "Text Color Primary",
      }}
    >
      <div className="text-color text-color-primary">Static</div>
      <Button
        label="Interactive"
        className="text-color text-color-primary-interactive"
      />
    </Section>
  </>
);

export default {
  title: "Pages/Token",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Color = {};
