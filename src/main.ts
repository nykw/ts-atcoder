import { readFileSync } from "fs";

const range = ((n: number | bigint) => {
  if (typeof n === "number") return Array.from(Array(n), (_, i) => i);

  const result: bigint[] = [];
  for (let i = 0n; i < n; i++) {
    result.push(i);
  }
  return result;
}) as {
  (n: number): number[];
  (n: bigint): bigint[];
};

const zip = <X, Y>(xs: X[], ys: Y[]): [X, Y][] =>
  range(Math.min(xs.length, ys.length)).map((i) => [xs[i], ys[i]]);
const unzip = <X, Y>(xys: [X, Y][]): [X[], Y[]] =>
  xys.reduce(
    ([xs, ys], [x, y]) => {
      xs.push(x);
      ys.push(y);
      return [xs, ys];
    },
    [[], []] as [X[], Y[]]
  );

const getCin = (buffer: string): [() => string, () => number, () => bigint] => {
  const inputs = buffer
    .trim()
    .split("\n")
    .flatMap((l) => l.trim().split(" "));
  let count = 0;
  const cin = () => inputs[count++];
  return [cin, () => Number(cin()), () => BigInt(cin())];
};

const solve = () => {};

const main = () => {
  const [cin, nCin, bCin] = getCin(readFileSync("/dev/stdin", "utf-8"));
};
main();
