import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";

export default async function paste(name: string, file: string) {
  try {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    if (!snippets.includes(name))
      return console.error(`[WorldAPI] Snippet ${name} does not exist!`);
    const snippet = await fs.readFile(
      `${refs.rootDir}/snippets/${name}`,
      "utf-8"
    );
    await fs.writeFile(file, snippet);
    console.log(`[WorldAPI] Pasted snippet ${name} into ${file}`);
  } catch (error) {
    console.error("[WorldAPI]: An error occured while pasting the snippet");
  }
}
