import { HTMLAttributes, FC, PropsWithChildren } from "react";
import classnames from "classnames";
import {
  TextMediaContextDefault,
  TextMediaContext,
} from "@kickstartds/base/lib/text-media";
import { ImageTextProps } from "./ImageTextProps";
import { Container } from "@kickstartds/core/lib/container";
import "./image-text.scss";

export const ImageText: FC<ImageTextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  image,
  layout,
  highlightText,
  ...props
}) => (
  <>
    <Container name="text-media">
      <TextMediaContextDefault
        className={classnames(
          highlightText ? "c-image-text--highlight" : "",
          "c-image-text"
        )}
        {...props}
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
  </>
);

export const ImageTextProvider: FC<PropsWithChildren<any>> = (props) => (
  <TextMediaContext.Provider {...props} value={ImageText} />
);
