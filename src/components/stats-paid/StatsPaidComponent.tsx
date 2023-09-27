import { HTMLAttributes, FC } from "react";
import classnames from "classnames";

import { StatsPaidProps } from "./StatsPaidProps";
import "./stats-paid.scss";
import { CountUp } from "@kickstartds/content/lib/count-up";

export const StatsPaid: FC<
  StatsPaidProps & HTMLAttributes<HTMLElement>
> = ({}) => {
  return (
    <>
      <CountUp to={0} />
    </>
  );
};
