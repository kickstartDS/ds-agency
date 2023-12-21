import classnames from "classnames";
import { FC, PropsWithChildren, useRef } from "react";
import { SectionHeaderProps } from "./SectionHeaderProps";
import { Headline } from "@kickstartds/base/lib/headline";
import "./section-header.scss";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { TagLabel } from "@kickstartds/base/lib/tag-label";

export const SectionHeader: FC<PropsWithChildren<SectionHeaderProps>> = ({
  componentName,
  href,
  linkLabel,
}) => {
  return (
    <div className="c-section-header--container">
      <div className={classnames("c-section-header")}>
        <div className="c-section-header__main">
          <Headline
            level="h4"
            style="p"
            text={componentName}
            spaceAfter="minimum"
          />
          <TagLabel label={"Paid"} />
        </div>
        <div className="c-section-header__side">
          <Link href={href} className="c-section-header__link">
            {linkLabel}
            <Icon icon="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};
