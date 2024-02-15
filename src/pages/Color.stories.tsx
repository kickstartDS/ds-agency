import "./design-token.scss";
import { Section } from "../components/section/SectionComponent";
import { Button } from "@kickstartds/base/lib/button";

const Page = () => (
  <>
    <Section
      headline={{
        text: "Color Primary",
        large: true,
      }}
      backgroundColor="accent"
      content={{
        mode: "list",
      }}
    >
      <Section
        headline={{
          text: "Background Color Primary",
        }}
      >
        <div className="color-primary background-color background-color">
          Static
        </div>
        <Button
          label="Interactive"
          className="background-color color-interactive color-primary"
        />
      </Section>

      <Section
        headline={{
          text: "Border Color Primary",
        }}
      >
        <div className="border-color color-primary">Static</div>
        <Button
          label="Interactive"
          className="border-color color-primary color-interactive"
        />
      </Section>

      <Section
        headline={{
          text: "Text Color Primary",
        }}
      >
        <div className="text-color color-primary">Static</div>
        <Button
          label="Interactive"
          className="text-color color-primary color-interactive"
        />
      </Section>
    </Section>

    <Section
      headline={{
        text: "Color Interface",
        large: true,
      }}
      content={{
        mode: "list",
      }}
    >
      <Section
        headline={{
          text: "Background Color Interface",
        }}
      >
        <div className="color-interface background-color background-color">
          Static
        </div>
        <Button
          label="Interactive"
          className="background-color color-interactive color-interface"
        />
      </Section>

      <Section
        headline={{
          text: "Border Color Interface",
        }}
      >
        <div className="border-color color-interface">Static</div>
        <Button
          label="Interactive"
          className="border-color color-interface color-interactive"
        />
      </Section>

      <Section
        headline={{
          text: "Text Color Interface",
        }}
      >
        <div className="text-color color-interface">Static</div>
        <Button
          label="Interactive"
          className="text-color color-interface color-interactive"
        />
      </Section>
    </Section>

    <Section
      headline={{
        text: "Color Default",
        large: true,
      }}
      backgroundColor="accent"
      content={{
        mode: "list",
      }}
    >
      <Section
        headline={{
          text: "Background Color Default",
        }}
        backgroundColor="accent"
      >
        <div className="color-default background-color background-color">
          Static
        </div>

        <Button
          label="Interactive"
          className="background-color color-interactive color-default"
        />
      </Section>

      <Section
        headline={{
          text: "Border Color Default",
        }}
        backgroundColor="accent"
      >
        <div className="border-color color-default">Static</div>

        <Button
          label="Interactive"
          className="border-color color-default color-interactive"
        />
      </Section>

      <Section
        headline={{
          text: "Text Color Default",
        }}
        backgroundColor="accent"
      >
        <div className="text-color color-default">Static</div>
        <Button
          label="Interactive"
          className="text-color color-default color-interactive"
        />
      </Section>
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
