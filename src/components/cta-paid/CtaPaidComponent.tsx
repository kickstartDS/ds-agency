import { FC, useContext } from "react";
import { CtaPaidProps } from "./CtaPaidProps";
import "./cta-paid.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { ButtonContext } from "@kickstartds/base/lib/button";
import classnames from "classnames";

export const CtaPaid: FC<CtaPaidProps> = ({
  headline,
  largeHeadline,
  sub,
  image,
  backgroundImage,
  backgroundColor,
  align,
  fullWidth = false,
  buttons = [],
  text,
}) => {
  const Button = useContext(ButtonContext);
  const ButtonGroup = ({ buttons: buttons }) => {
    return buttons.length ? (
      <div className="c-cta__links">
        {buttons.map((button, index) =>
          button.label ? (
            <Button
              variant={
                index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary"
              }
              label={button.label}
              target={button.target}
              icon={button?.icon}
              key={index}
            />
          ) : (
            ""
          )
        )}
      </div>
    ) : null;
  };

  return (
    <ButtonContext.Provider
      // @ts-expect-error
      value={ButtonGroup}
    >
      <Storytelling
        className={classnames("c-cta", fullWidth ? `c-cta--full-width` : "")}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
        image={{
          source: image?.source,
          order: image?.order,
        }}
        box={{
          text: text,
          textAlign: align,
          // @ts-expect-error
          link: { buttons },
          headline: {
            text: headline,
            level: "h2",
            style: largeHeadline === true ? "h1" : undefined,
            sub: sub,
            spaceAfter: largeHeadline === true ? "large" : undefined,
            align: align,
          },
        }}
      />
    </ButtonContext.Provider>
  );
};
