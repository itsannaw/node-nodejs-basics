import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { checkAccess } from "./helpers/checkAccess.js";
import { fileURLToPath } from "node:url";

const name = "fresh.txt";
const content = "I am fresh and young";
const folder = "files";
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, folder, name);

const create = async () => {
  if (await checkAccess(filePath)) {
    throw new Error("FS operation failed!");
  } else {
    await writeFile(filePath, content);
    console.log(`File ${name} saved in ${filePath}`);
  }
};

await create();
