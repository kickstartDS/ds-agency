import { PropsWithChildren } from "react";
import { RawPageWrapper } from "../components/page-wrapper/RawPageWrapperComponent";
import { useTheme } from "../themes/useTheme";

export default function Frame({
  children,
  theme,
}: PropsWithChildren<{ themeName: string | null; theme: any | null }>) {
  useTheme(theme);
  return <RawPageWrapper>{children}</RawPageWrapper>;
}
