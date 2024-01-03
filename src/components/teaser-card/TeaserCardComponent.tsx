import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";

import classnames from "classnames";

import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";

import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";

export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { headline, text, target, image, label, displayButton = true, ...props },
    ref
  ) => {
    return (
      <TeaserBoxContextDefault
        {...props}
        className={classnames(`c-teaser-card`, label && `c-teaser-card--label`)}
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
          hidden:
            displayButton === true
              ? false
              : displayButton === false
              ? true
              : true,
          label: "Read more",
          variant: "secondary",
          target: target,
        }}
        image={image}
        ref={ref}
      />
    );
  }
);

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
