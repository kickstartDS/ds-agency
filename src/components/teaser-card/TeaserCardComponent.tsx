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
>(({ headline, text, target, image, label, ...props }, ref) => {
  return (
    <TeaserBoxContextDefault
      {...props}
      className="c-teaser--card"
      ratio={"4:3"}
      topic={headline}
      text={text}
      // @ts-expect-error
      renderTopic={() => (
        <>
          {label ? <span className="c-teaser__label">{label}</span> : ""}
          {headline}
        </>
      )}
      link={{
        label: "Read more",
        variant: "secondary",
        target: target,
      }}
      image={image}
      ref={ref}
    />
  );
});

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
