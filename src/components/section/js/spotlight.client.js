function onMousemove(event) {
  this.style.setProperty(
    "--dsa-section__spotlight--top",
    `${event.clientY - this.getBoundingClientRect().top}px`
  );
  this.style.setProperty(
    "--dsa-section__spotlight--left",
    `${event.clientX - this.getBoundingClientRect().left}px`
  );
}

export const initSpotlight = (element) => {
  element.addEventListener("mousemove", onMousemove, { passive: true });

  return () => {
    element.style.removeProperty("--dsa-section__spotlight--top");
    element.style.removeProperty("--dsa-section__spotlight--left");

    element.removeEventListener("mousemove", onMousemove, { passive: true });
  };
};

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
