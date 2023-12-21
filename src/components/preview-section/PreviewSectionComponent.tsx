import { FC, PropsWithChildren, useRef } from "react";
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
  const outerDivRef = useRef(null);
  return (
    <div ref={outerDivRef} className="l-preview-section--wrapper">
      <SectionHeader
        componentName={preview.componentName}
        href={preview.href}
        linkLabel={preview.linkLabel}
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
        invertToggle
        className="l-preview-section"
        {...props}
      >
        {children}
      </Section>
      <InvertToggle setParentRef={outerDivRef} />
    </div>
  );
};