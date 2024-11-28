import { forwardRef, createContext, useContext } from "react";
import { PostHead } from "@kickstartds/blog/lib/post-head";
import { BlogHeadProps } from "./BlogHeadProps";
import "./blog-head.scss";

export type { BlogHeadProps };

export const BlogHeadContextDefault = forwardRef<HTMLDivElement, BlogHeadProps>(
  ({ date, tags = [], headline, image, alt, ...rest }, ref) => {
    return (
      <PostHead
        {...rest}
        className="dsa-blog-head"
        date={date}
        headline={{ text: headline, level: "h1", align: "left" }}
        image={{ src: image, alt: alt || headline }}
        categories={tags.map((tag) => {
          return { label: tag.entry };
        })}
        ref={ref}
      />
    );
  }
);

export const BlogHeadContext = createContext(BlogHeadContextDefault);
export const BlogHead = forwardRef<HTMLDivElement, BlogHeadProps>(
  (props, ref) => {
    const Component = useContext(BlogHeadContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogHead.displayName = "BlogHead";
