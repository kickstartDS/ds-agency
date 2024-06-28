import { FC, PropsWithChildren } from "react";
import IconSprite from "../../token/IconSprite";
import { HeadlineLevelProvider } from "../headline/HeadlineLevelContext";
import Providers from "../Providers";
import "../../token/tokens.css";
import "../../global.client";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <HeadlineLevelProvider>
    <Providers>
      <IconSprite />
      {children}
    </Providers>
  </HeadlineLevelProvider>
);
