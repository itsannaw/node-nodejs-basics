import { fork } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const child = fork(resolve(__dirname, "files", "script.js"), args, {
    silent: true,
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("error", (err) => {
    console.error("Child process error:", err);
  });
  child.on("exit", () => {
    console.log(`Child process exited.`);
  });
};

spawnChildProcess(["hi", 2024, "February"]);
