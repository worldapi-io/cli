import * as fs from "fs/promises";
import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import applyTrigger from "../../functions/snippets/applyTrigger.js";
import refs from "../../refs.js";
const create = async (name, args) => {
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    if (snippets.includes(name))
        return console.log(`[WorldAPI]: Snippet ${name} already exists`);
    if (args.file) {
        try {
            const filedata = await fs.readFile(args.file);
            await fs.writeFile(`${refs.rootDir}/snippets/${name}`, filedata);
            if (args.trigger)
                applyTrigger(name, args.trigger);
            return console.log(`[WorldAPI]: Snippet ${name} created`);
        }
        catch (error) {
            return console.log("[WorldAPI]: File not found to create snippet");
        }
    }
    if (args.trigger)
        applyTrigger(name, args.trigger);
    await fs.writeFile(`${refs.rootDir}/snippets/${name}`, args.content || "");
    console.log(`[WorldAPI]: Snippet ${name} created`);
};
export default create;
