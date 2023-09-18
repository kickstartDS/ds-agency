import { AnchorHTMLAttributes, FC } from "react";
import { LinkContext, LinkContextDefault } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const StorybookLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  ...props
}) => {
  if (href?.startsWith("sb:")) {
    const [, kind, story] = href.split(":");
    return <LinkTo kind={kind} story={story} {...props} />;
  }
  return <LinkContextDefault href={href} {...props} />;
};

export const LinkProvider = (props: any) => (
  <LinkContext.Provider value={StorybookLink} {...props} />
);
