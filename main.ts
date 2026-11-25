import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We agreed on this by email, so this meeting only exists because cancelling it would have taken courage.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
