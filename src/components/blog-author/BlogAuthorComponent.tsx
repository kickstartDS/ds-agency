import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { BlogAuthorProps } from "./BlogAuthorProps";
import { Contact } from "../contact/ContactComponent";

export type { BlogAuthorProps };

export const BlogAuthorContextDefault = forwardRef<
  HTMLDivElement,
  BlogAuthorProps & HTMLAttributes<HTMLDivElement>
>(({ name, byline, image, links, ...props }, ref) => {
  return (
    <Contact
      ref={ref}
      {...props}
      className="dsa-blog-aside__author"
      title={name}
      subtitle={byline}
      image={image}
      links={links}
    />
  );
});

export const BlogAuthorContext = createContext(BlogAuthorContextDefault);
export const BlogAuthor = forwardRef<HTMLDivElement, BlogAuthorProps>(
  (props, ref) => {
    const Component = useContext(BlogAuthorContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogAuthor.displayName = "BlogAuthor";
