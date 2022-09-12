import { describe, expect, it } from "vitest";
import { logStepLevel } from "../helpers/functions";

describe("functions", () => {
  it("should execute a log of test", () => {
    const test = 1;
    
    function resultFunction() {
      logStepLevel(test);
    }

    expect(resultFunction).toBeTruthy();
  });
});
