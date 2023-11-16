import { FC, PropsWithChildren } from "react";
import IconSprite from "../../token-dsa-new/IconSprite";
import Providers from "../Providers";
import "../../global.client";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Providers>
    <IconSprite />
    {children}
  </Providers>
);
