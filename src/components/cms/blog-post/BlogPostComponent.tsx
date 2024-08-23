import { Split } from "../../split/SplitComponent";
import { BlogHead } from "../../blog-head/BlogHeadComponent";
import { Section } from "../../section/SectionComponent";
import { BlogAside } from "../../blog-aside/BlogAsideComponent";
import { Text } from "../../text/TextComponent";
import { Cta } from "../../cta/CtaComponent";
import { BlogPostProps } from "../BlogPostProps";
import { FC, PropsWithChildren } from "react";

export const BlogPost: FC<PropsWithChildren<BlogPostProps>> = ({
  head,
  content,
  aside,
  cta,
  children,
}) => (
  <>
    <Section width="wide">
      <Split layout="sidebarRight">
        <div>
          {head && <BlogHead {...head} />}
          {content ? <Text text={content} /> : children}
        </div>
        <BlogAside {...aside} />
      </Split>
    </Section>
    {cta && (
      <Section content={{ mode: "list" }}>
        <Cta {...cta} />
      </Section>
    )}
  </>
);
BlogPost.displayName = "BlogPost";
