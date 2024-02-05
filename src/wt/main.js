import { cpus } from "os";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const startNum = 10;

  const workerPromises = cpus().map((_, idx) => {
    return new Promise((res, rej) => {
      const worker = new Worker(resolve(__dirname, "worker.js"), {
        workerData: startNum + idx,
      });

      worker.on("message", (data) => res({ status: "resolved", data }));
      worker.on("error", (error) => rej({ status: "error", error }));
      worker.on("exit", (code) => {
        if (code !== 0) {
          rej({
            status: "error",
            error: new Error(`Worker stopped with exit code ${code}`),
          });
        }
      });
    });
  });

  try {
    const results = await Promise.all(workerPromises);
    console.log(results);
  } catch (error) {
    console.error("Error occurred during calculations:", error);
  }
};

await performCalculations();
