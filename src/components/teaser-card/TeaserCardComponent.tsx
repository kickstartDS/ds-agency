import {
  HTMLAttributes,
  FC,
  PropsWithChildren,
  forwardRef,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";
import { TeaserCardProps } from "./TeaserCardProps";
import "./teaser-card.scss";
import { Container } from "@kickstartds/core/lib/container";

export const TeaserCardContextDefault = forwardRef<
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
      ...rest
    },
    ref
  ) => (
    <Container name="teaser-card">
      <TeaserBoxContextDefault
        {...rest}
        className={classnames(
          `dsa-teaser-card`,
          label && `dsa-teaser-card--label`,
          `dsa-teaser-card--${layout}`,
          `dsa-teaser-card--${imageRatio}`
        )}
        topic={headline}
        text={text}
        // @ts-expect-error
        renderTopic={() => (
          <>
            {label ? (
              <span className="dsa-teaser-card__label">{label}</span>
            ) : (
              ""
            )}
            {headline}
          </>
        )}
        link={{
          hidden: button?.hidden,
          label: button.label,
          variant: "secondary",
          target: target,
          icon: button?.chevron ? "chevron-right" : undefined,
        }}
        image={image}
        ref={ref}
      />
    </Container>
  )
);
TeaserCardContextDefault.displayName = "TeaserCard";

export const TeaserCardContext = createContext(TeaserCardContextDefault);
export const TeaserCard = forwardRef<
  HTMLDivElement,
  TeaserCardProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(TeaserCardContext);
  return <Component {...props} ref={ref} />;
});

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={TeaserCard} />
);
