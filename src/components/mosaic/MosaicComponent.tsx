import { FC } from "react";
import { MosaicProps } from "./MosaicProps";
import "./mosaic.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

export const Mosaic: FC<MosaicProps> = ({ layout, largeHeadlines, tiles }) => (
  <div className="c-mosaic">
    {tiles.map((tile, index) => (
      <Storytelling
        key={index}
        full
        backgroundColor={tile.backgroundColor}
        backgroundImage={tile.backgroundImage}
        box={{
          headline: {
            text: tile?.headline,
            sub: tile?.sub,
            level: "h2",
            style: largeHeadlines ? "h1" : undefined,
          },
          text: tile?.text,
          textColor: tile?.textColor,
          ...(tile?.button?.toggle && {
            link: {
              target: tile?.button?.target,
              label: tile?.button?.label,
              icon: tile?.button?.icon,
            },
          }),
        }}
        image={{
          source: tile?.image.src,
          alt: tile?.image.alt,
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
