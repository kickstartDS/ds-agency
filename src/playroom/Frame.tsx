import { PropsWithChildren } from "react";
import "lazysizes/plugins/attrchange/ls.attrchange";
import { PageWrapper } from "../components/page-wrapper/PageWrapperComponent";
import { useTheme } from "../themes/useTheme";

export default function Frame({
  children,
  themeName,
}: PropsWithChildren<{ themeName: string | null; theme: any | null }>) {
  useTheme(themeName);
  return <PageWrapper>{children}</PageWrapper>;
}
