import classnames from "classnames";
import { FC, PropsWithChildren } from "react";
import { PreviewSectionProps } from "./PreviewSectionProps";
import "./preview-section.scss";
import { Section } from "../section/SectionComponent";
import { SectionHeader } from "./partials/section-header/SectionHeaderComponent";
import { SectionControls } from "./partials/section-controls/SectionControlsComponent";

export const PreviewSection: FC<PropsWithChildren<PreviewSectionProps>> = ({
  preview,
  headline,
  content,
  width = "default",
  style = "default",
  spotlight = false,
  backgroundColor = "default",
  spaceBefore = "default",
  spaceAfter = "default",
  inverted,
  buttons = [],
  children,
  ...props
}) => {
  return (
    <div className="l-preview-section--wrapper">
      <SectionHeader
        title={preview.title}
        type={preview.type}
        link={preview.link}
      />
      <Section
        headline={headline}
        content={content}
        width={width}
        //@ts-ignore
        style={style}
        spotlight={spotlight}
        backgroundColor={backgroundColor}
        spaceBefore={spaceBefore}
        spaceAfter={spaceAfter}
        inverted={inverted}
        buttons={buttons}
        className={classnames(
          "l-preview-section",
          preview?.layoutToggle ? "l-preview-section--layout" : ""
        )}
        {...props}
      >
        {children}
      </Section>
      <SectionControls
        layoutToggle={preview.layoutToggle}
        themeSwitch
        invertToggle
      />
    </div>
  );
};
