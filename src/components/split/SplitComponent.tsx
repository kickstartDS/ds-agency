import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { SplitProps } from "./SplitProps";
import "./split.scss";

export const Split: FC<PropsWithChildren<SplitProps>> = ({
  layout,
  children,
}) => (
  <div className={classnames(`l-split l-split--${layout}`)}>{children}</div>
);
