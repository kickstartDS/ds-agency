import { forwardRef, createContext, useContext } from "react";
import { PostHead } from "@kickstartds/blog/lib/post-head";
import { BlogHeadProps } from "./BlogHeadProps";
import "./blog-head.scss";

export const BlogHeadContextDefault = forwardRef<HTMLDivElement, BlogHeadProps>(
  ({ date, tags = [], headline, image }, ref) => {
    return (
      <PostHead
        date={date}
        headline={{ text: headline, level: "h1", align: "left" }}
        image={{ src: image }}
        categories={tags.map((tag) => {
          return { label: tag };
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
