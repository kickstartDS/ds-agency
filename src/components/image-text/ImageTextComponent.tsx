import {
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  FC,
} from "react";
import classnames from "classnames";
import {
  TextMediaContextDefault as OriginalTextMediaContextDefault,
  TextMediaContext,
} from "@kickstartds/base/lib/text-media";
import { ImageTextProps } from "./ImageTextProps";
import { Container } from "@kickstartds/core/lib/container";
import "./image-text.scss";

export const ImageTextContextDefault = forwardRef<
  HTMLDivElement,
  ImageTextProps & HTMLAttributes<HTMLDivElement>
>(({ text, image, layout, highlightText, ...rest }, ref) => (
  <Container name="text-media" ref={ref}>
    <OriginalTextMediaContextDefault
      {...rest}
      className={classnames(
        highlightText ? "dsa-image-text--highlight" : "",
        "dsa-image-text"
      )}
      text={text}
      media={[
        {
          image: {
            src: image.src,
          },
        },
      ]}
      mediaAlignment={
        layout === "above"
          ? "above-center"
          : layout === "below"
          ? "below-center"
          : layout
      }
    />
  </Container>
));

export const ImageTextContext = createContext(ImageTextContextDefault);
export const ImageText = forwardRef<
  HTMLDivElement,
  ImageTextProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(ImageTextContext);
  return <Component {...props} ref={ref} />;
});
ImageText.displayName = "ImageText";

export const ImageTextProvider: FC<
  ImageTextProps & HTMLAttributes<HTMLDivElement>
> = (props) => (
  <TextMediaContext.Provider {...props} value={ImageTextContextDefault} />
);
