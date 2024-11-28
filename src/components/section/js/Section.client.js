import { Component, define } from "@kickstartds/core/lib/component";

export const identifier = "dsa.section";

class Section extends Component {
  constructor(element) {
    super(element);

    if (element.classList.contains("dsa-section--spotlight")) {
      import("./spotlight.client").then((mod) => {
        const cleanup = mod.initSpotlight(element);
        this.onDisconnect(cleanup);
      });
    }

    const sliderContainer = element.querySelector(".l-section__slider");
    if (sliderContainer) {
      import("@kickstartds/base/lib/section/Section")
        .then((mod) => mod.getSectionSlider())
        .then((initSectionSlider) => {
          const cleanup = initSectionSlider(sliderContainer);
          this.onDisconnect(cleanup);
        });
    }
  }
}

define(identifier, Section);
