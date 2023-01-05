import * as fs from "fs/promises";

export const checkFolderExistance = async (path: string) => {
  try {
    console.log(path);

    await fs.mkdir('/home/codespace/nvm/current/bin/worldapi/.user/commands', { recursive: true });
  } catch (error) {
    return console.log(error);

  }
};
