import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";
import applyTrigger from "../../functions/snippets/applyTrigger.js";

interface EditArgs {
  file?: string;
  content?: string;
  trigger?: string;
}

export default async function edit(name: string, args: EditArgs) {
  try {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    if (!snippets.includes(name))
      return console.log(`[World API]: Snippet ${name} does not exist`);
    if (args.file) {
      try {
        const filedata = await fs.readFile(args.file);
        await fs.writeFile(`${refs.rootDir}/snippets/${name}`, filedata);
        console.log(`[World API]: Snippet ${name} edited`);
      } catch (error) {
        return console.log("[World API]: File not found to edit snippet");
      }
    } else if (args.content) {
      await fs.writeFile(
        `${refs.rootDir}/snippets/${name}`,
        args.content || ""
      );
      console.log(`[World API]: Snippet ${name} edited`);
    }
    if (args.trigger) await applyTrigger(name, args.trigger);
  } catch (error) {
    console.error("[World API]: An error occured while editing the snippet");
    console.log(error);
  }
}
