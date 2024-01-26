import { createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  try {
    const writable = createWriteStream(
      resolve(__dirname, "files", "fileToWrite.txt"),
      { flags: "a" }
    );
    process.stdout.write(
      "Enter data to be written to file. Press Ctrl + D to finish.\n"
    );
    await pipeline(process.stdin, writable);
  } catch (error) {
    console.error(error);
  }
};

await write();
