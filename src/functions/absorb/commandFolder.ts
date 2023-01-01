import { checkFolderExistance } from "../checkFolderExistance.js";
import * as fs from "fs/promises";
import refs from "../../refs.js";

export default async function absorbCommandFolder(path: string) {
    await checkFolderExistance(`${refs.rootDir}/commands`);
    console.log(`[WorldAPI]: Absorbing command folder ${path}...`)
    const folder = await fs.readdir(`${path}/commands`);
    let commands = folder.filter(file => file.endsWith(".js"));
    commands = commands.filter(async file => {
        try {
            const { default: command } = await import(`${path}/commands/${file}`);
            if (command.name) return true;
            else return false;
        } catch (error) {
            return false;
        }
    })
    commands.forEach(async file => {
        await fs.copyFile(`${path}/commands/${file}`, `${refs.rootDir}/extras/commands/${file}`);
        console.log(`[WorldAPI]: Absorbed command ${file.split(".")[0]}!`);
    })


}
