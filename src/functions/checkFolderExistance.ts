import * as fs from "fs/promises";

export const checkFolderExistance = async (path: string) => {
  try {
    await fs.open(path);
  } catch (error) {
    await fs.mkdir(path);
  }
};
