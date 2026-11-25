import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We already agreed on this by email \u2014 this meeting exists only because nobody wanted to be the person who cancelled it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
