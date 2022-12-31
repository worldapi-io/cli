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
      return console.log(`[WorldAPI]: Snippet ${name} does not exist`);
    if (args.file) {
      try {
        const filedata = await fs.readFile(args.file);
        await fs.writeFile(`${refs.rootDir}/snippets/${name}`, filedata);
        console.log(`[WorldAPI]: Snippet ${name} edited`);
      } catch (error) {
        return console.log("[WorldAPI]: File not found to edit snippet");
      }
    } else if (args.content) {
      await fs.writeFile(`${refs.rootDir}/snippets/${name}`, args.content || "");
      console.log(`[WorldAPI]: Snippet ${name} edited`);
    }
    if (args.trigger)
      await applyTrigger(name, args.trigger);
  } catch (error) {
    console.error("[WorldAPI]: An error occured while editing the snippet");
    console.log(error);

  }
}
