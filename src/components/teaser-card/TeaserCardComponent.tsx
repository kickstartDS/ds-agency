import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";
import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";
import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";
import { Container } from "@kickstartds/core/lib/container";

export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      headline,
      text,
      button,
      target,
      image,
      imageRatio = "wide",
      label,
      layout = "stack",
      ...props
    },
    ref
  ) => {
    return (
      <Container name="teaser-card">
        <TeaserBoxContextDefault
          {...props}
          className={classnames(
            `c-teaser-card`,
            label && `c-teaser-card--label`,
            `c-teaser-card--${layout}`,
            `c-teaser-card--${imageRatio}`
          )}
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
              button?.displayButton === true
                ? false
                : button?.displayButton === false
                ? true
                : true,
            label: button?.label,
            variant: "secondary",
            target: target,
          }}
          image={image}
          ref={ref}
        />
      </Container>
    );
  }
);
TeaserCard.displayName = "TeaserCard";

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
