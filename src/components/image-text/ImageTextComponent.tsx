import { HTMLAttributes, FC, PropsWithChildren } from "react";
import {
  TextMediaContextDefault,
  TextMediaContext,
} from "@kickstartds/base/lib/text-media";
import { ImageTextProps } from "./ImageTextProps";
import { Container } from "@kickstartds/core/lib/container";

export const ImageText: FC<ImageTextProps & HTMLAttributes<HTMLElement>> = ({
  text,
  image,
  layout,
  ...props
}) => (
  <>
    <Container name="text-media">
      <TextMediaContextDefault
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
