import { HTMLAttributes, FC } from "react";
import { PostAside } from "@kickstartds/blog/lib/post-aside";
import { BlogAsideProps } from "./BlogAsideProps";
import "./blog-aside.scss";

export const BlogAside: FC<BlogAsideProps & HTMLAttributes<HTMLElement>> = ({
  author,
  socialSharing,
  readingTime,
  date,
}) => {
  const socialLinks = socialSharing?.map((link) => {
    return {
      icon: link.icon,
      href: link.href,
      title: link.title,
    };
  });

  const metaItems = [
    {
      icon: "date",
      text: date,
    },
  ];

  if (readingTime)
    metaItems.push({
      icon: "time",
      text: readingTime,
    });

  const authorLinks = [];

  if (author.twitter)
    authorLinks.push({
      href: `https://twitter.com/${author.twitter}`,
      icon: "twitter",
      newTab: true,
      label: `@${author.twitter}`,
    });

  if (author.email)
    authorLinks.push({
      href: `mailto:${author.email}`,
      icon: "email",
      newTab: false,
      label: author.email,
    });

  return (
    <PostAside
      author={{
        title: author.name,
        image: author.image && { src: author.image },
        copy: author.byline,
        links: authorLinks,
      }}
      shareBar={{
        // @ts-expect-error
        headline: { text: "Share this post" },
        links: socialLinks,
      }}
      meta={{
        items: metaItems,
      }}
    />
  );
};
