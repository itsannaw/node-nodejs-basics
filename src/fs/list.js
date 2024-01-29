import { readdir } from "node:fs/promises";
import { checkExistence } from "./helpers/checkExistence.js";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const folderPath = resolve(__dirname, "files");

const list = async () => {
    if (!(await checkExistence(folderPath))) {
      throw new Error("FS operation failed!");
    } else {
      const files = await readdir(folderPath);
      for (const file of files) console.log(file);
    }
};

await list();
