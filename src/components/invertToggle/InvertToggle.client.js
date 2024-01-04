import { Component, define } from "@kickstartds/core/lib/component";

export const identifier = "dsa.invert-toggle";

export default class InvertToggle extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    const button = element.querySelector(".invert-toggle__checkbox");
    const target = element.closest(element.dataset.target);

    const clickHandler = () => {
      if (target.getAttribute("ks-inverted") === "true") {
        target.removeAttribute("ks-inverted");
      } else {
        target.setAttribute("ks-inverted", "true");
      }
    };

    button.addEventListener("click", clickHandler);
    this.onDisconnect(() => {
      button.removeEventListener("click", clickHandler);
    });
  }
}

define(identifier, InvertToggle);
