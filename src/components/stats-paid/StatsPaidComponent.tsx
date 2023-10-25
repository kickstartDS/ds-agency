import { HTMLAttributes, FC } from "react";
import { StatsPaidProps } from "./StatsPaidProps";
import "./stats-paid.scss";
import { CountUp } from "@kickstartds/content/lib/count-up";

export const StatsPaid: FC<StatsPaidProps & HTMLAttributes<HTMLElement>> = ({
  stats = [],
}) => {
  return (
    <div className="c-stats">
      {stats.map((stat, index) => (
        <CountUp
          className="c-stats__item"
          key={index}
          to={stat.number}
          icon={{
            icon: stat?.icon,
          }}
          text={stat?.description}
          topic={stat.title}
        />
      ))}
    </div>
  );
};
