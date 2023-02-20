import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";

const list = async () => {
  try {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    let list = "";
    snippets.forEach((snippet) => (list += `\n• ${snippet}`));
    console.log(`[World API]: Snippets:${list}`);
  } catch (error) {
    console.error("[World API]: An error occured while listing the snippets");
  }
};

export default list;
