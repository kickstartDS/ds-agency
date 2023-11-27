import { Component, define } from "@kickstartds/core/lib/component";

export default class Section extends Component {
  static identifier = "base.section";

  constructor(element) {
    super(element);

    this.element.addEventListener("mousemove", this.move.bind(this));
    window.addEventListener("mouseout", this.out.bind(this));

    this.onDisconnect(this.cleanup);

    // this.isOpen = this.element.getAttribute("aria-expanded") === "true";
    // this.nav = document.getElementById(
    //   this.element.getAttribute("aria-controls")
    // );
    // this.navMainDropdowns = [...document.querySelectorAll("#nav-main details")];

    // this.element.addEventListener("click", this);
  }

  move(event) {
    console.log(
      "MOVE",
      getComputedStyle(this.element).getPropertyValue(
        "--l-section--spotlight-top"
      )
    );
    this.element.style.setProperty(
      "--l-section--spotlight-top",
      `${event.clientY - this.element.getBoundingClientRect().top}px`
    );
    this.element.style.setProperty(
      "--l-section--spotlight-left",
      `${event.clientX - this.element.getBoundingClientRect().left}px`
    );
    // this.isOpen = true;
    // body.lock();
    // this.element.setAttribute("aria-expanded", this.isOpen);
    // this.nav.focus();

    // window.addEventListener("keydown", this);
  }

  out() {
    console.log("OUT");
    // this.isOpen = false;
    // body.reset();
    // this.element.setAttribute("aria-expanded", this.isOpen);
    // this.element.focus();

    // window.removeEventListener("keydown", this);
  }

  cleanup() {
    this.element.removeEventListener("mousemove");
    this.element.removeEventListener("mouseout");
  }
}

define(Section.identifier, Section);

// const hero = document.querySelector(".hero");
// const spotlight = document.querySelector(".spotlight");

// document.body.addEventListener("mousemove", updateSpotlight);
// window.addEventListener("mouseout", updateSpotlight);

function updateSpotlight(event) {
  if (event.type === "mouseout") {
    spotlight.classList.add("opacity-0");
    return;
  }

  if (
    event.clientX + window.scrollX > 1 &&
    event.clientY + window.scrollY > 1 &&
    event.clientX + window.scrollX < hero.getBoundingClientRect().width - 1 &&
    event.clientY + window.scrollY < hero.getBoundingClientRect().height - 1
  ) {
    spotlight.classList.remove("opacity-0");
  } else {
    spotlight.classList.add("opacity-0");
    return;
  }

  spotlight.style.background = `radial-gradient(
        650px circle at ${
          event.clientX - hero.getBoundingClientRect().left
        }px ${event.clientY - hero.getBoundingClientRect().top}px,
        rgb(79 70 229 / .25),
        transparent 80%
      )`;
}
