import { test, expect } from "vitest";
import { add } from "../src/calc.js";

test("adds", () => expect(add(2, 2)).toBe(4));
test("adds zero", () => expect(add(0, 0)).toBe(0));
test("fails on purpose", () => {
  // intentionally failing: baseline must record fail
  expect(add(2, 2)).toBe(5);
});
