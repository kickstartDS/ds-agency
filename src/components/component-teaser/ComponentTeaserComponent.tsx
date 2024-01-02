import { HTMLAttributes, FC, PropsWithChildren, forwardRef } from "react";

import classnames from "classnames";

import {
  TeaserBoxContextDefault,
  TeaserBoxContext,
} from "@kickstartds/base/lib/teaser-box";

import { ComponentTeaserProps } from "./ComponentTeaserProps";
import "./component-teaser.scss";

export const ComponentTeaser = forwardRef<
  HTMLDivElement,
  ComponentTeaserProps & HTMLAttributes<HTMLDivElement>
>(({ title, text, target, image, label, ...props }, ref) => {
  return (
    <TeaserBoxContextDefault
      {...props}
      className={classnames(
        `c-component-teaser`,
        label && `c-component-teaser--label`
      )}
      ratio={"16:6"}
      topic={title}
      text={text}
      // @ts-expect-error
      renderTopic={() => (
        <>
          {label ? <span className="c-teaser__label">{label}</span> : ""}
          {title}
        </>
      )}
      link={{
        hidden: true,
        label: "Read more",
        target: target,
      }}
      image={image}
      ref={ref}
    />
  );
});

export const TeaserBoxProvider: FC<PropsWithChildren> = (props) => (
  <TeaserBoxContext.Provider {...props} value={ComponentTeaser} />
);
