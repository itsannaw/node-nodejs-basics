import fsPromises from "fs/promises";
import { checkAccess } from "./helpers/checkAccess.js";
import { checkExistence } from "./helpers/checkExistence.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = resolve(__dirname, "files");
const copyFolderPath = resolve(__dirname, "files_copy");
const joinCopyFolderPath = resolve(__dirname, copyFolderPath);

const copy = async () => {
  if (
    !(await checkExistence(sourceFolderPath)) ||
    (await checkAccess(joinCopyFolderPath))
  ) {
    throw new Error("FS operation failed!");
  } else {
    await fsPromises.cp(sourceFolderPath, copyFolderPath, {
      recursive: true,
      force: false,
    });
    console.log(`${copyFolderPath} created!`);
  }
};

await copy();
