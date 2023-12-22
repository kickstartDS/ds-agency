import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { SectionHeaderProps } from "./SectionHeaderProps";
import { Headline } from "@kickstartds/base/lib/headline";
import "./section-header.scss";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Container } from "@kickstartds/core/lib/container";

export const SectionHeader: FC<PropsWithChildren<SectionHeaderProps>> = ({
  title,
  link,
  label,
}) => {
  return (
    <div className="c-section-header--container">
      <Container name="section-header">
        <div className={classnames("c-section-header")}>
          <div className="c-section-header__main">
            <Headline level="h4" style="p" text={title} spaceAfter="minimum" />
            <TagLabel label={label} />
          </div>
          <div className="c-section-header__side">
            <Link href={link.href} className="c-section-header__link">
              {link.label}
              <Icon icon="arrow-right" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
