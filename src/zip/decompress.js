import { createReadStream, createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createUnzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  try {
    const gzipFile = createReadStream(
      resolve(__dirname, "files", "archive.gz")
    );
    const unzipFile = createWriteStream(
      resolve(__dirname, "files", "fileToCompress.txt")
    );
    await pipeline(gzipFile, createUnzip(), unzipFile);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
