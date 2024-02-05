import { createReadStream, createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  try {
    const gzip = createGzip();
    const file = createReadStream(
      resolve(__dirname, "files", "fileToCompress.txt")
    );
    const gzipFile = createWriteStream(
      resolve(__dirname, "files", "archive.gz")
    );
    await pipeline(file, gzip, gzipFile);
  } catch (error) {
    console.error(error);
  }
};

await compress();
