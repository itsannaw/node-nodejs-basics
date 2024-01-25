import { readFile } from "node:fs/promises";
import { checkExistence } from "./helpers/checkExistence.js";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    if (!(await checkExistence(filePath))) {
      throw new Error("FS operation failed!");
    } else {
      const data = await readFile(filePath, { encoding: "utf8" });
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

await read();
