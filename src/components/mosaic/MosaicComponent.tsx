import { FC } from "react";
import { MosaicProps } from "./MosaicProps";
import "./mosaic.scss";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

export const Mosaic: FC<MosaicProps> = ({ tiles }) => (
  <div className="c-mosaic">
    {tiles.map((tile, index) => (
      <Storytelling
        key={index}
        backgroundColor={tile.backgroundColor}
        box={{
          headline: {
            text: tile.headline,
            sub: tile.sub,
            level: "h2",
          },
          text: tile.text,
          textColor: tile.textColor,
          link: {
            target: tile.cta.target,
            label: tile.cta.label,
          },
        }}
        image={{
          source: tile.image,
          order: {
            desktopImageLast: index % 2 !== 0,
          },
        }}
      />
    ))}
  </div>
);
