import { HTMLAttributes, FC, PropsWithChildren } from "react";
import {
  TextMediaContextDefault,
  TextMediaContext,
} from "@kickstartds/base/lib/text-media";
import { PictureTextProps } from "./PictureTextProps";
import { Container } from "@kickstartds/core/lib/container";

export const PictureText: FC<
  PictureTextProps & HTMLAttributes<HTMLElement>
> = ({ text, image, layout, ...props }) => (
  <>
    <Container name="text-media">
      <TextMediaContextDefault
        {...props}
        text={text}
        media={[
          {
            image: {
              src: image.source,
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

export const PictureTextProvider: FC<PropsWithChildren<any>> = (props) => (
  <TextMediaContext.Provider {...props} value={PictureText} />
);
