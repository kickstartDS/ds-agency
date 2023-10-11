import { FC } from "react";
import { MosaicProps } from "./MosaicProps";
import "./mosaic.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

export const Mosaic: FC<MosaicProps> = ({ layout, tiles }) => (
  <div className="c-mosaic">
    {tiles.map((tile, index) => (
      <Storytelling
        key={index}
        full
        backgroundColor={tile.backgroundColor}
        box={{
          headline: {
            text: tile?.headline,
            sub: tile?.sub,
            level: "h2",
          },
          text: tile?.text,
          textColor: tile?.textColor,
          ...(tile?.cta && {
            link: {
              target: tile?.cta?.target,
              label: tile?.cta?.label,
            },
          }),
        }}
        image={{
          source: tile?.image,
          order: {
            desktopImageLast:
              layout === "textLeft"
                ? true
                : layout === "textRight"
                ? false
                : index % 2 !== 0,
          },
        }}
      />
    ))}
  </div>
);
