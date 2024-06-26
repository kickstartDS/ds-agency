import { FC, PropsWithChildren } from "react";
import IconSprite from "../../token/IconSprite";
import Providers from "../Providers";
import "../../token/tokens.css";
import "../../global.client";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Providers>
    <IconSprite />
    {children}
  </Providers>
);
