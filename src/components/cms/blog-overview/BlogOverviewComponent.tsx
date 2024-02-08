import { Section } from "../../section/SectionComponent";
import { BlogTeaser } from "../../blog-teaser/BlogTeaserComponent";
import { BlogOverviewProps } from "../BlogOverviewProps";

export const BlogOverview = ({
  latest,
  more = [],
}: BlogOverviewProps) => {
  return (
    <>
      {latest && (
        <Section width="wide">
          <BlogTeaser {...latest} />
        </Section>
      )}
      {more.length > 0 && (
        <Section headline={{ text: "More articles" }}>
          {more.map((article) => (
            <BlogTeaser {...article} key={article.headline} />
          ))}
        </Section>
      )}
    </>
  );
};
