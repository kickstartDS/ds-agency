import { FC, PropsWithChildren } from "react";
import { SliderProps } from "./SliderProps";
import { Slider as KickstartSlider } from "@kickstartds/content/lib/slider";
import "./slider.scss";

export const Slider: FC<PropsWithChildren<SliderProps>> = ({
  gap,
  type,
  autoplay,
  perView,
  children,
  ...props
}) => (
  <KickstartSlider
    gap={gap}
    type={type}
    autoplay={autoplay}
    perView={perView}
    {...props}
  >
    {children}
  </KickstartSlider>
);
