import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  try {
    const reverseStream = new Transform({
      transform(data, _, callback) {
        const reversedData = data.toString().split("").reverse().join("");
        this.push(reversedData);
        callback();
      },
    });
    console.log("Enter data to be reverses text. Press Ctrl + D to finish");
    await pipeline(process.stdin, reverseStream, process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await transform();
