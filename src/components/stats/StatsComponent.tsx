import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { StatsProps } from "./StatsProps";
import "./stats.scss";
import { Stat } from "../stat/StatComponent";

export const StatsContextDefault = forwardRef<
  HTMLDivElement,
  StatsProps & HTMLAttributes<HTMLDivElement>
>(({ stat: stats = [], ...rest }, ref) => (
  <div {...rest} ref={ref} className="dsa-stats">
    {stats.map((stat, index) => (
      <Stat {...stat} key={index} />
    ))}
  </div>
));

export const StatsContext = createContext(StatsContextDefault);
export const Stats = forwardRef<
  HTMLDivElement,
  StatsProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(StatsContext);
  return <Component {...props} ref={ref} />;
});
