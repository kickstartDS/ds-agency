import { HTMLAttributes, FC } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";

export const Stats: FC<StatsProps & HTMLAttributes<HTMLElement>> = ({
  items = [],
}) => {
  return (
    <div className="c-stats">
      {items.map((item, index) => (
        <div className="c-stats__item" key={index}>
          <span className="c-stats__value">{item.number}</span>
          <span className="c-stats__label">{item.title}</span>
          {item?.description ? (
            <span className="c-stats__description">{item?.description}</span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
