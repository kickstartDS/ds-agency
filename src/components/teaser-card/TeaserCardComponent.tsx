import { HTMLAttributes, FC, PropsWithChildren } from "react";

import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";

import { TeaserCardProps } from "./TeaserCardProps";

export const TeaserCard: FC<TeaserCardProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  text,
  target,
  image,
  inverted,
  ...props
}) => {
  return (
    <TeaserBoxContextDefault
      {...props}
      topic={headline}
      text={text}
      link={{
        label: "Read more",
        variant: "secondary",
        inverted: inverted,
        target: target,
      }}
      image={image}
      inverted={inverted}
    />
  );
};

export const TeaserBoxProvider: FC<PropsWithChildren<any>> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
