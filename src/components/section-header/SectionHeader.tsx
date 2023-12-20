import classnames from "classnames";
import { FC } from "react";
import { SectionHeaderProps } from "./SectionHeaderProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { Text } from "../text/TextComponent";
import "./section-header.scss";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";

export const SectionHeader: FC<SectionHeaderProps> = ({
  headline,
  sub,
  text,
}) => (
  <div className={classnames("c-section-header")}>
    <Link href="#" className="c-section-header__link">
      <Icon icon="arrow-left" />
      All Components
    </Link>
    <Headline
      level="h1"
      style="h1"
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? <Text text={text} /> : ""}
  </div>
);
