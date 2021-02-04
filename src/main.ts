import { readFileSync } from "fs";

const getCin = (buffer: string): [() => string, () => number, () => bigint] => {
  const inputs = buffer.split("\n").flatMap((l) => l.split(" "));
  let count = 0;
  const cin = () => inputs[count++];
  return [cin, () => Number(cin()), () => BigInt(cin())];
};

const main = () => {
  const [cin, nCin, bCin] = getCin(readFileSync("/dev/stdin", "utf-8"));
};
main();
