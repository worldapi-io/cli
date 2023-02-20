import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";

export default async function print(name: string) {
  try {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    if (!snippets.includes(name))
      return console.error(`[World API]: Snippet ${name} does not exist`);
    const data = await fs.readFile(`${refs.rootDir}/snippets/${name}`);
    console.log(`[World API]: Snippet ${name}:\n${data}`);
  } catch (error) {
    console.error("[World API]: An error occured while printing the snippet");
  }
}
