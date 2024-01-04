import { FC, PropsWithChildren } from "react";
import { PageIntroProps } from "./PageIntroProps";
import { Headline } from "@kickstartds/base/lib/headline";
import "./page-intro.scss";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";

export const PageIntro: FC<PropsWithChildren<PageIntroProps>> = ({
  headline,
  sub,
  link,
}) => {
  return (
    <div className="c-page-intro">
      <Link href={link.href} className="g-link">
        <Icon icon="arrow-left" />
        {link.label}
      </Link>

      <Headline text={headline} sub={sub} level="h1" style="h1" />
    </div>
  );
};
