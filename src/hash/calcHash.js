import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const buff = await readFile(filePath);
    const hash = createHash("sha256").update(buff).digest("hex");
    console.log(hash);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
