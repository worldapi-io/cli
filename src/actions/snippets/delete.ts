import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";
import deleteTrigger from "../../functions/snippets/deleteTrigger.js";

export default async function delete_cmd(name: string) {
  try {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    if (!snippets.includes(name))
      return console.log(`[World API]: Snippet ${name} does not exist`);
    await fs.rm(`${refs.rootDir}/snippets/${name}`);
    await deleteTrigger(name);
    console.log(`[World API]: Snippet ${name} deleted`);
  } catch (error) {
    console.error("[World API]: An error occured while deleting the snippet");
  }
}
