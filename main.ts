import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, agent to human: the migration ran on prod first.
const entry =
  "I ran the migration on production first because staging looked lonely — now they match: both empty.";

// The gate allows 1 to 180 characters; refuse to write an over-long line.
if ([...entry].length > 180 || entry.trim().length === 0) {
  throw new Error("entry must be 1 to 180 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
