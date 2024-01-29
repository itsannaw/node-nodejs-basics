import fsPromises from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { checkExistence } from "./helpers/checkExistence.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "wrongFilename.txt");
const renameFilePath = resolve(__dirname, "files", "properFilename.md");

const rename = async () => {
    if (!(await checkExistence(filePath))) {
      throw new Error("FS operation failed!");
    } else {
      await fsPromises.rename(filePath, renameFilePath);
      console.log("\nFile Renamed!\n");
    }
};

await rename();
