import { HTMLAttributes, FC } from "react";
import { StatProps } from "./StatProps";

export const Stat: FC<StatProps & HTMLAttributes<HTMLElement>> = (stat) => {
  return (
    <div className="c-stats__stat">
      <span className="c-stats__value">{stat.number}</span>
      <span className="c-stats__label">{stat.title}</span>
      {stat?.description ? (
        <span className="c-stats__description">{stat?.description}</span>
      ) : (
        ""
      )}
    </div>
  );
};
