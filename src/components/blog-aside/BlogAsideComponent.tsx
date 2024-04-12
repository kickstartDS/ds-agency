import classnames from "classnames";
import { forwardRef, createContext, useContext } from "react";
import { PostAside } from "@kickstartds/blog/lib/post-aside";
import { BlogAsideProps } from "./BlogAsideProps";
import "./blog-aside.scss";

export const BlogAsideContextDefault = forwardRef<
  HTMLDivElement,
  BlogAsideProps
>(({ author, socialSharing, readingTime, date, className }, ref) => {
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

  if (author?.twitter)
    authorLinks.push({
      href: `https://twitter.com/${author.twitter}`,
      icon: "twitter",
      newTab: true,
      label: `@${author.twitter}`,
    });

  if (author?.email)
    authorLinks.push({
      href: `mailto:${author.email}`,
      icon: "email",
      newTab: false,
      label: author.email,
    });

  return (
    <PostAside
      className={classnames(className, "dsa-blog-aside")}
      author={{
        title: author?.name,
        image: author?.image && { src: author.image },
        copy: author?.byline,
        links: authorLinks,
      }}
      shareBar={{
        headline: {
          text: "Share this post",
          level: "h3",
        },
        links: socialLinks,
      }}
      meta={{
        items: metaItems,
      }}
      ref={ref}
    />
  );
});

export const BlogAsideContext = createContext(BlogAsideContextDefault);
export const BlogAside = forwardRef<HTMLDivElement, BlogAsideProps>(
  (props, ref) => {
    const Component = useContext(BlogAsideContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogAside.displayName = "BlogAside";
