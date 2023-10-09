import classnames from "classnames";
import { FC } from "react";
import { CtaPaidProps } from "./CtaPaidProps";
import "./cta-paid.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

export const CtaPaid: FC<CtaPaidProps> = ({
  headline,
  largeHeadline,
  sub,
  text,
  primaryCta,
  secondaryCta,
  align = "left",
}) => (
  <Storytelling
    image={{}}
    box={{
      headline: {
        text: headline,
        level: "h2",
        style: largeHeadline === true ? "h1" : undefined,
        sub: sub,
      },
      text: text,
    }}
  />
);
