import fs from "node:fs";
import crypto from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const readStream = fs.createReadStream(filePath);
    const createHash = crypto.createHash("sha256").setEncoding("hex");
    await pipeline(readStream, createHash, process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
