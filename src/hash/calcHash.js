import fs from "node:fs";
import crypto from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    fs.createReadStream(filePath)
      .pipe(crypto.createHash("sha256").setEncoding("hex"))
      .on("finish", function () {
        console.log(this.read());
      });
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
