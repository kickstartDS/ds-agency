import { FC, PropsWithChildren } from "react";
import IconSprite from "../../token/IconSprite";
import Providers from "../Providers";
import "../../global.client";

export const RawPageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Providers>
    <IconSprite />
    {children}
  </Providers>
);
