import { checkFolderExistance } from "../functions/checkFolderExistance.js";
import * as fs from "fs/promises";
import absorbSnippetFolder from "../functions/absorb/snippetFolder.js";
import absorbConfigFolder from "../functions/absorb/configFolder.js";

export default async function absorb(path: string) {
  await checkFolderExistance(path);
  console.log(`[WorldAPI]: Absorbing folder ${path}...`)
  const folder = await fs.readdir(path);
  if (folder.includes("snippets")) await absorbSnippetFolder(path);
  if (folder.includes("config")) await absorbConfigFolder(path);
}
