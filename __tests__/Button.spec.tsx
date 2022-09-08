import { expect, describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  it("should render a button", () => {
    const fn = vi.fn();

    render(<Button clickHandler={fn} id="next" name="Next" />);

    const button = screen.getByRole("button", {
      name: "Next",
    }) as HTMLButtonElement;

    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(fn).toBeCalled();
  });

  it("should render a disabled button", () => {
    render(<Button id="disabledButton" name="Disabled" disabled={true} />);

    const disabledButton = screen.getByRole("button", {
      name: "Disabled",
    }) as HTMLButtonElement;

    expect(disabledButton).toBeDefined();

    expect(disabledButton.disabled).toBe(true);
  });
});
