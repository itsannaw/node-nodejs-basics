import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const readable = createReadStream(
      resolve(__dirname, "files", "fileToRead.txt")
    );
    await pipeline(readable, process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await read();
