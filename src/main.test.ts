/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readFileSync } from "fs";
import { solve } from "./main";
import { config } from "dotenv";

config();
test("check", () => {
  const input = readFileSync(
    `${__dirname}/${process.env.INPUT_FILE!}`,
    "utf-8"
  );
  const ans = solve(input);
  const output = readFileSync(
    `${__dirname}/${process.env.OUTPUT_FILE!}`,
    "utf-8"
  );
  expect(ans).toBe(output);
});
