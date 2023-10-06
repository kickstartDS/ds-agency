import { PropsWithChildren } from "react";
import { Decorator } from "@storybook/react";
import { ButtonProvider } from "./button/ButtonComponent";
import { SectionProvider } from "./section/SectionComponent";
import { TeaserBoxProvider } from "./teaser-card/TeaserCardComponent";
import { HeadlineProvider } from "./headline/HeadlineComponent";
import { BedrockProvider } from "../bedrock/BedrockProvider";

const Providers = (props: PropsWithChildren) => (
  <BedrockProvider>
    <ButtonProvider>
      <HeadlineProvider>
        <SectionProvider>
          <TeaserBoxProvider {...props} />
        </SectionProvider>
      </HeadlineProvider>
    </ButtonProvider>
  </BedrockProvider>
);

export default Providers;

export const providerDecorator: Decorator = (storyFn, context) => (
  <Providers>{storyFn(context)}</Providers>
);
