import * as fs from "fs/promises";
import refs from "../refs.js";

export const checkFolderExistance = async (path: string) => {
  try {
    const root = await fs.readdir(refs.rootDir);
    const extension = path.slice(refs.rootDir.length + 1);
    const folders = extension.split("/");
    let _path = refs.rootDir;
    folders.forEach(async (folder, index) => {
      if (!root.includes(folder)) {
        await fs.mkdir(`${_path}/${folder}`);
      }
      _path += `/${folder}`;
    })
  } catch (error) {
    console.log('[WorldAPI]: An error occured', error);
  }
};
