import { Component, define } from "@kickstartds/core/lib/component";

export const identifier = "dsa.wireframe-toggle";

export default class WireframeToggle extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const button = element.querySelector(".wireframe-toggle__checkbox");
    const target = element.closest(element.dataset.target);

    const clickHandler = () => {
      if (target.getAttribute("ks-wireframeed") === "true") {
        target.removeAttribute("ks-wireframeed");
      } else {
        target.setAttribute("ks-wireframeed", "true");
      }
    };

    button.addEventListener("click", clickHandler);
    this.onDisconnect(() => {
      button.removeEventListener("click", clickHandler);
    });
  }
}

define(identifier, WireframeToggle);
