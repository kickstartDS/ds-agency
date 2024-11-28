import { PageProps } from "../PageProps";
import { FC, PropsWithChildren } from "react";

export type { PageProps };

export const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => (
  <>{children}</>
);
Page.displayName = "Page";
