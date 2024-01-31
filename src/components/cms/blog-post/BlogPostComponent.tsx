import { Split } from "../../split/SplitComponent";
import { BlogHead } from "../../blog-head/BlogHeadComponent";
import { Section } from "../../section/SectionComponent";
import { BlogAside } from "../../blog-aside/BlogAsideComponent";
import { Text } from "../../text/TextComponent";
import { Cta } from "../../cta/CtaComponent";
import { BlogPostProps } from "../BlogPostProps";

export const BlogPost = ({ head, content, aside, cta }: BlogPostProps) => (
  <>
    <Section width="wide">
      <Split layout="sidebarRight">
        <div>
          {head && <BlogHead {...head} />}
          <Text text={content} />
        </div>
        <BlogAside {...aside} />
      </Split>
    </Section>
    {cta && (
      <Section>
        <Cta {...cta} />
      </Section>
    )}
  </>
);
