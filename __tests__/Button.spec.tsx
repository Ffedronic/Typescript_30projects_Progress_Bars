import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
  it("should render a button", () => {
    render(<Button id="test" name="test"/>)
    const button = document.getElementById("test")
    expect(button).toBeDefined()
  });
});
