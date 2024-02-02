import { HTMLAttributes, FC } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { Stat } from "../stat/StatComponent";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  stat: stats = [],
}) => {
  return (
    <div className="c-stats">
      {stats.map((stat, index) => (
        <Stat {...stat} key={index} />
      ))}
    </div>
  );
};
