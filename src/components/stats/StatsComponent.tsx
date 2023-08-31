import { HTMLAttributes, FC } from "react";

import { StatsProps } from "./StatsProps";
import "./stats.scss";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  stats = [],
}) => {
  return (
    <div>
      {stats.map((stat, index) => (
        <div key={index}>
          <span>{stat.label}: </span>
          <span>{stat.value}</span>
        </div>
      ))}
    </div>
  );
};
