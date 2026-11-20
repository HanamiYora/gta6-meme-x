import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Copy POST.json from the repository into the output directory.
// The grader reads the post's address from the copy we write.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const data = readFileSync(source, "utf8");
const post = JSON.parse(data);
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be an object with a url string");
}
// The address must be an X post's address; the house reads the post itself.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)) {
  throw new Error("POST.json url must look like https://x.com/<handle>/status/<id>");
}

mkdirSync(outDir, { recursive: true });
// Write the file back byte for byte: two runs must produce the same bytes.
writeFileSync(join(outDir, "POST.json"), data, "utf8");
