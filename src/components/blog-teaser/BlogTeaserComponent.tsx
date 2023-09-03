import { HTMLAttributes, FC } from "react";

import { PostTeaser } from "@kickstartds/blog/lib/post-teaser";

import { BlogTeaserProps } from "./BlogTeaserProps";
import "./blog-teaser.scss";

export const BlogTeaser: FC<BlogTeaserProps & HTMLAttributes<HTMLElement>> = ({
  date,
  tags,
  headline,
  teaserText,
  image,
  link,
  readingTime,
  author,
}) => {
  const teaserMetaItems = [];

  if (date)
    teaserMetaItems.push({
      icon: "date",
      text:
        typeof date === "number" ? new Date(date).toLocaleDateString() : date,
    });

  if (readingTime)
    teaserMetaItems.push({
      icon: "time",
      text: readingTime,
    });

  return (
    <PostTeaser
      image={{ src: image }}
      meta={{
        author: {
          image: author.image && { src: author.image },
          name: author.name,
        },
        items: teaserMetaItems,
      }}
      link={{
        label: link.label || "Read more",
        href: link.url,
      }}
      title={headline}
      body={teaserText}
      categories={tags.map((tag) => {
        return { label: tag };
      })}
    />
  );
};
