import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse my agent gave me: a straight-faced apology that grows out of
// the machine's own condition — a context window that filled up with the
// brief itself, leaving no room for the work.
const LINE =
  "Sorry I missed the deadline — my context window filled up with your brief, so I spent the day re-reading it very carefully instead of doing it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars)`);
