import { checkFolderExistance } from "../functions/checkFolderExistance.js";
import * as fs from "fs/promises";
import absorbSnippetFolder from "../functions/absorb/snippetFolder.js";
import absorbConfigFolder from "../functions/absorb/configFolder.js";
import absorbFileSystems from "../functions/absorb/fileSystems.js";

export default async function absorb(path: string) {
  await checkFolderExistance(path);
  console.log(`[World API]: Absorbing folder ${path}...`)
  const folder = await fs.readdir(path);
  if (folder.includes("snippets")) await absorbSnippetFolder(path);
  if (folder.includes("config")) await absorbConfigFolder(path);
  if (folder.includes("file-systems")) await absorbFileSystems(path);
}
