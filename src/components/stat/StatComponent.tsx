import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { StatProps } from "./StatProps";

export const StatContextDefault = forwardRef<
  HTMLDivElement,
  StatProps & HTMLAttributes<HTMLDivElement>
>(({ number, title, description, ...rest }, ref) => (
  <div {...rest} ref={ref} className="c-stats__stat">
    <span className="c-stats__value">{number}</span>
    <span className="c-stats__label">{title}</span>
    {description && <span className="c-stats__description">{description}</span>}
  </div>
));

export const StatContext = createContext(StatContextDefault);
export const Stat = forwardRef<
  HTMLDivElement,
  StatProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(StatContext);
  return <Component {...props} ref={ref} />;
});
