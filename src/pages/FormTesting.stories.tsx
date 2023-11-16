import { Section } from "../components/section/SectionComponent";
import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { CheckboxGroup } from "@kickstartds/form/lib/checkbox-group";
import { RadioGroup } from "@kickstartds/form/lib/radio-group";
import { TextField } from "@kickstartds/form/lib/text-field";
import { SelectField } from "@kickstartds/form/lib/select-field";

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section
      content={{
        mode: "tile",
      }}
      width="narrow"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>
    <Section
      content={{
        mode: "tile",
      }}
      width="narrow"
      backgroundColor="accent"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>
    <Section
      content={{
        mode: "tile",
      }}
      width="narrow"
      backgroundColor="bold"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>
    <Section
      inverted
      content={{
        mode: "tile",
      }}
      width="narrow"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>
    <Section
      inverted
      content={{
        mode: "tile",
      }}
      width="narrow"
      backgroundColor="accent"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>
    <Section
      inverted
      content={{
        mode: "tile",
      }}
      width="narrow"
      backgroundColor="bold"
    >
      <CheckboxGroup
        label="Checkbox Label"
        name="name1"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <RadioGroup
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
          {
            label: "Lorem ipsum",
            hint: "Lorem ipsum dolor sit amet.",
          },
        ]}
      />

      <TextField
        hint="This is a hint"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <TextField
        invalid
        invalidMessage="This field is invalid"
        label="Lorem ipsum"
        placeholder="Placeholder"
      />
      <SelectField
        label="Checkbox Label"
        options={[
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
          },
          {
            label: "Lorem ipsum",
            value: "Value",
            disabled: true,
          },
        ]}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Pages/Form Testing",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const FormTesting = {};
