import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { SplitProps } from "./SplitProps";
import "./split.scss";

export type { SplitProps };

export const Split: FC<PropsWithChildren<SplitProps>> = ({
  layout = "sidebarRight",
  mainSectionWidth = "default",
  children,
}) => (
  <div
    className={classnames(
      "l-split",
      layout === "sidebarRight"
        ? "l-split--sidebar-right"
        : layout === "sidebarLeft"
        ? "l-split--sidebar-left"
        : "l-split--sidebar-right",
      mainSectionWidth === "narrow"
        ? "l-split--narrow"
        : mainSectionWidth === "medium"
        ? "l-split--medium"
        : mainSectionWidth === "wide"
        ? "l-split--wide"
        : "l-split--medium"
    )}
  >
    {children}
  </div>
);
