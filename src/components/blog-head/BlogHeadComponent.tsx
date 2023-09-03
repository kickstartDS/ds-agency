import { HTMLAttributes, FC } from "react";
import { PostHead } from "@kickstartds/blog/lib/post-head";
import { BlogHeadProps } from "./BlogHeadProps";
import "./blog-head.scss";

export const BlogHead: FC<BlogHeadProps & HTMLAttributes<HTMLElement>> = ({
  date,
  tags,
  headline,
  image,
}) => {
  return (
    <PostHead
      date={date}
      headline={{ text: headline, align: "left" }}
      image={{ src: image }}
      categories={tags.map((tag) => {
        return { label: tag };
      })}
    />
  );
};
