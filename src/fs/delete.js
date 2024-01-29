import fsPromises from "fs/promises";
import { checkExistence } from "./helpers/checkExistence.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
    if (!(await checkExistence(filePath))) {
      throw new Error("FS operation failed!");
    } else {
      await fsPromises.unlink(filePath);
      console.log(`${filePath} delete!`);
    }
};

await remove();
