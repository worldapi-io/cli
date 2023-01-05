import * as fs from "fs/promises";

export const checkFolderExistance = async (path: string) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (error) {
    return;
  }
};
