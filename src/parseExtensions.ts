import { checkFolderExistance } from "./functions/checkFolderExistance.js";
import refs from "./refs.js";
import * as fs from "fs/promises";
import { Command, program } from "commander";

export default async function parseExtensionCommands() {
    await checkFolderExistance(`${refs.rootDir}/extras/commands`);
    const commands = await fs.readdir(`${refs.rootDir}/extras/commands`);
    commands.forEach(async file => {
        const { default: command } = await import(`${refs.rootDir}/extras/commands/${file}`) as { default: Command }
        program.addCommand(command);

    })
}
