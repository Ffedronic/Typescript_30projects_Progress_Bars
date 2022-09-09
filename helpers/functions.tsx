import { steps } from "./database";

export function updateProgressSteps(currentActive: number) {
  activateCircle(currentActive);

  styleWidthProgressbar(currentActive);
}

export function activateFirstCircle() {
  const { circles } = getProgressBarElements();

  circles[0].classList.add("active");
}

export function activateCircle(count: number) {
  const { circles } = getProgressBarElements();
  circles.forEach((circle, index) => {
    if (index < count) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

export function styleWidthProgressbar(currentActive: number) {
  const { progressBar, circles } = getProgressBarElements();
  progressBar.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
}

export function toggleButtonState(currentActive: number) {
  const { nextButton, prevButton } = getButtonsElements();
  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === steps.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

export function getButtonsElements() {
  const nextButton = document.getElementById("next") as HTMLButtonElement;
  const prevButton = document.getElementById("prev") as HTMLButtonElement;

  return { nextButton, prevButton };
}

export function getProgressBarElements() {
  const circles = document.querySelectorAll(
    ".circle"
  ) as NodeListOf<HTMLLIElement>;

  const progressBar = document.getElementById("progress") as HTMLDivElement;

  return { circles, progressBar };
}

export function logStepLevel(currentActive: number) {
  console.log("Step level: " + currentActive);
}
