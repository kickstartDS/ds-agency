import { FC, PropsWithChildren } from "react";
import { PreviewSectionProps } from "./PreviewSectionProps";
import "./preview-section.scss";
import { Section } from "../section/SectionComponent";
import { SectionHeader } from "../section-header/SectionHeaderComponent";
import { InvertToggle } from "../invertToggle/InvertToggle";

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
        label={preview.label}
        link={preview.link}
      />
      <Section
        headline={headline}
        width={width}
        //@ts-ignore
        style={style}
        spotlight={spotlight}
        backgroundColor={backgroundColor}
        spaceBefore={spaceBefore}
        spaceAfter={spaceAfter}
        inverted={inverted}
        buttons={buttons}
        className="l-preview-section"
        {...props}
      >
        {children}
        <InvertToggle target=".l-preview-section--wrapper" />
      </Section>
    </div>
  );
};
