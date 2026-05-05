import { merge } from "../src/merge";

test("merge works", () => {
  expect(
    merge([1,4], [6,5,2], [3])
  ).toEqual([1,2,3,4,5,6]);
});