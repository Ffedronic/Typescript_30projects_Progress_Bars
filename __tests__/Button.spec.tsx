import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  it("should render a button", () => {
    render(<Button id="next" name="Next" />);

    const button = screen.getByRole("button", { name: "Next" });

    expect(button).toBeDefined();
  });

  it("should render a disabled button", () => {
    render(<Button id="disabledButton" name="Disabled" disabled={true} />);

    const disabledButton = screen.getByRole("button", { name: "Disabled" });

    const disabledAttribute =
      disabledButton.attributes.getNamedItem("disabled")!;

    expect(disabledButton).toBeDefined();

    expect(disabledAttribute.name).toEqual("disabled");
  });
});
