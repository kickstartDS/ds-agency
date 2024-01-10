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
  type,
}) => {
  return (
    <>
      <div className="c-section-header--container">
        <Container name="section-header">
          <div className={classnames("c-section-header")}>
            <div className="c-section-header__main">
              <Headline
                level="h4"
                style="p"
                text={title}
                spaceAfter="minimum"
              />
              <TagLabel
                className={type === "paid" ? "c-tag-label--primary" : ""}
                label={
                  type === "free" ? "Free" : type === "paid" ? "Paid" : "Paid"
                }
              />
            </div>
            <Link
              href={link.href}
              className="c-section-header__link c-section-header__link-desktop"
            >
              <span className="c-section-header__link-label">
                {link.labelDesktop}
              </span>
              <Icon icon="link" />
            </Link>

            <Link
              href={link.href}
              className="c-section-header__link c-section-header__link-mobile"
            >
              {link?.labelMobile ? (
                <span className="c-section-header__link-label-mobile">
                  {link.labelMobile}
                </span>
              ) : (
                ""
              )}
              <Icon icon="link" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
