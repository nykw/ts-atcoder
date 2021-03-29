/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readFileSync } from "fs";
import { range, zip, unzip, solve } from "./main";
import { config } from "dotenv";

describe("main.ts", () => {
  beforeAll(() => {
    config();
  });

  // test("range()", () => {
  //   describe("number", () => {
  //     expect(range(0)).toEqual([]);
  //     expect(range(4)).toEqual([0, 1, 2, 3]);
  //   });
  //   describe("bigint", () => {
  //     expect(range(0n)).toEqual([]);
  //     expect(range(4n)).toEqual([0n, 1n, 2n, 3n]);
  //   });
  // });

  // test("zip()", () => {
  //   const a = [1, 2, 3];
  //   const b = [1, 2];
  //   expect(zip(a, b)).toEqual([
  //     [1, 1],
  //     [2, 2],
  //   ]);
  // });

  // test("unzip()", () => {
  //   expect(
  //     unzip([
  //       [1, 1],
  //       [2, 2],
  //       [3, 3],
  //     ])
  //   ).toEqual([
  //     [1, 2, 3],
  //     [1, 2, 3],
  //   ]);
  // });

  test("solve()", () => {
    const input = readFileSync(
      `${__dirname}/../${process.env.INPUT_FILE!}`,
      "utf-8"
    );
    const ans = solve(input);
    const output = readFileSync(
      `${__dirname}/../${process.env.OUTPUT_FILE!}`,
      "utf-8"
    );
    expect(ans).toBe(output);
  });
});
