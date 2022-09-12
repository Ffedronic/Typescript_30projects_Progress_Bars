import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import {
  getProgressBarElements,
  getButtonsElements
} from "../helpers/functions";
import Home from "../pages";

describe("<Home>", () => {
  render(<Home />);
  it("should render a heading level 1 Create Progress Bar", () => {
    const main = within(screen.getByRole("main"));

    expect(
      main.getByRole("heading", { level: 1, name: /progress/i })
    ).toBeDefined();
  });

  describe("getProgressBar()", () => {
    it("should render 4 steps circles", () => {
      const { circles } = getProgressBarElements();

      expect(circles.length).toBe(4);
    });
    it("should render a progress bar", () => {
      const { progressBar } = getProgressBarElements();

      expect(progressBar).toBeDefined();
    });
  });

  describe("getButtonsElements()", () => {
    it("should render a next button", () => {
      const { nextButton } = getButtonsElements();

      expect(nextButton).toBeDefined();
    });

    it("should render a prev button", () => {
      const { prevButton } = getButtonsElements();

      expect(prevButton).toBeDefined();
    });
  });

  describe("go to the next step", () => {
    it("should go to the next level", () => {
      const { nextButton, prevButton } = getButtonsElements();

      const { circles, progressBar } = getProgressBarElements();

      fireEvent.click(nextButton);

      expect(prevButton.disabled).not.toBe(true);

      expect(progressBar.style.getPropertyValue("width")).toBeDefined();

      expect(circles[1].className.includes("active")).toBeTruthy();
    });
  });
});
