import { HTMLAttributes, FC } from "react";

import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { Icon } from "@kickstartds/base/lib/icon";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  stats = [],
}) => {
  return (
    <div className="c-stats">
      {stats.map((stat, index) => (
        <div className="c-stats__item" key={index}>
          {stat.icon ? <Icon className="c-stats__icon" icon={stat.icon} /> : ""}
          <span className="c-stats__value">{stat.value}</span>
          <span className="c-stats__label">{stat.label}</span>
          {stat?.description ? (
            <span className="c-stats__description">{stat.description}</span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
