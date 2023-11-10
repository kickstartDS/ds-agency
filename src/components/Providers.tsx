import { PropsWithChildren } from "react";
import { Decorator } from "@storybook/react";
import { ButtonProvider } from "./button/ButtonComponent";
import { SectionProvider } from "./section/SectionComponent";
import { TeaserBoxProvider } from "./teaser-card/TeaserCardComponent";
import { HeadlineProvider } from "./headline/HeadlineComponent";
import { BedrockProvider } from "../bedrock/BedrockProvider";
import { ButtonGroupProvider } from "./button-group/ButtonGroupComponent";

const Providers = (props: PropsWithChildren) => (
  <BedrockProvider>
    <ButtonProvider>
      <ButtonGroupProvider>
        <HeadlineProvider>
          <SectionProvider>
            <TeaserBoxProvider {...props} />
          </SectionProvider>
        </HeadlineProvider>
      </ButtonGroupProvider>
    </ButtonProvider>
  </BedrockProvider>
);

export default Providers;

export const providerDecorator: Decorator = (storyFn, context) => (
  <Providers>{storyFn(context)}</Providers>
);
