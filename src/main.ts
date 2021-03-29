/* eslint-disable @typescript-eslint/no-unused-vars */
import { readFileSync } from "fs";

const range = ((n: number | bigint) => {
  if (typeof n === "number") return Array.from(Array(n), (_, i) => i);

  const result: bigint[] = [];
  for (let i = 0n; i < n; i++) result.push(i);
  return result;
}) as {
  (n: number): readonly number[];
  (n: bigint): readonly bigint[];
};

const zip = <X, Y>(xs: readonly X[], ys: readonly Y[]): readonly [X, Y][] =>
  range(Math.min(xs.length, ys.length)).map((i) => [xs[i], ys[i]]);

const unzip = <X, Y>(xys: readonly [X, Y][]): [readonly X[], readonly Y[]] =>
  xys.reduce(
    ([xs, ys], [x, y]) => {
      xs.push(x);
      ys.push(y);
      return [xs, ys];
    },
    [[], []] as [X[], Y[]]
  );

const getCin = (buffer: string): [() => string, () => number, () => bigint] => {
  const words = buffer.trim().split(/[\s|\n]+/g);
  let count = 0;
  const cin = (): string => words[count++];
  return [cin, () => Number(cin()), () => BigInt(cin())];
};

const solve = (buffer: string): string => {
  const [cin, nCin, bCin] = getCin(buffer);
  return "";
};

const main = (): void => {
  console.log(solve(readFileSync("/dev/stdin", "utf-8")));
};
// テスト時にコメントアウト
main();

export { range, zip, unzip, solve };
