import fsPromises from "fs/promises";

export const checkExistence = async (path) => {
  try {
    await fsPromises.stat(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    } else {
      throw error;
    }
  }
};
