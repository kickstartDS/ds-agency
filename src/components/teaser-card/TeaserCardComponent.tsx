import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";

import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";

import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";

export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>(({ headline, text, target, image, inverted, ...props }, ref) => {
  return (
    <TeaserBoxContextDefault
      {...props}
      ratio={"4:3"}
      topic={headline}
      text={text}
      link={{
        label: "Read more",
        // @ts-expect-error
        variant: "secondary",
        inverted: inverted,
        target: target,
      }}
      image={image}
      inverted={inverted}
      ref={ref}
    />
  );
});

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
