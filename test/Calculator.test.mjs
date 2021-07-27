import { assert, expect } from "chai";
import Calculator from "../src/Calculator.mjs";

describe("RPN Calculator", () => {
  it("Should accept a string as an input", () => {
    const actual = "13";
    expect(actual).to.be.a("string");
  });

  it("Should return a negative integer if sum is less than zero", () => {
    const expected = "-13";
    const actual = Calculator("-5 -8 +");
    assert(actual, expected);
  });
  it("Should accept any amount of numbers as an input", () => {
    const actual = Calculator("5 5 5 8 + + -");
    const expected = "0";
    assert(actual, expected);
  });
});
