import { Component, define } from "@kickstartds/core/lib/component";

const consentButtonSelector = ".dsa-html__consent-button";

const copyScriptTag = (original) => {
  if (original.tagName === "SCRIPT") {
    const copy = document.createElement("script");
    for (const attr of original.attributes) {
      copy.setAttribute(attr.name, attr.value);
    }
    copy.textContent = original.textContent;

    return copy;
  }

  return original;
};

export default class Html extends Component {
  static identifier = "dsa.html";

  constructor(element) {
    super(element);

    const consentButton = element.querySelector(consentButtonSelector);
    const replaceHtml = () => {
      const template = element.querySelector("template");
      if (template) {
        const elements = [...template.content.children].map(copyScriptTag);
        element.replaceChildren(...elements);
        consentButton?.removeEventListener("click", replaceHtml);
      }
    };

    if (consentButton) {
      consentButton.addEventListener("click", replaceHtml);

      this.onDisconnect(() => {
        consentButton.removeEventListener("click", replaceHtml);
      });
    } else {
      replaceHtml();
    }
  }
}

define(Html.identifier, Html);
