import { checkFolderExistance } from "../../functions/checkFolderExistance.js";
import refs from "../../refs.js";
import * as fs from "fs/promises";
import * as chokidar from "chokidar";
import getConfig from "../../functions/getConfig.js";
import delete_cmd from "./delete.js";

export default async function watch(path: string) {
    // inits command handler
    await checkFolderExistance(`${refs.rootDir}/snippets`);
    const snippets = await fs.readdir(`${refs.rootDir}/snippets`);
    const config = await getConfig();
    // apply filters and init watcher
    let snippetTriggers = []
    if (config.snippets) snippetTriggers = Object.values(config.snippets);
    if (snippetTriggers.length == 0) return console.log("[WorldAPI]: No snippets found");
    console.info(`[WorldAPI]: Watching ${path} for changes...`);
    const watcher = chokidar.watch(path);

    watcher.on("change", async (path) => {
        let fileContent = await fs.readFile(path, "utf-8");
        const triggers = Object.entries(config.snippets);
        const triggered = triggers.filter(([name, trigger]) =>
            fileContent.includes(trigger)
        );
        if (!triggered.length) return;
        // replace triggers with snippets
        triggered.forEach(async ([name, trigger]) => {
            if (!snippets.includes(name)) return await delete_cmd(name);
            const snippetContent = await fs.readFile(
                `${refs.rootDir}/snippets/${name}`,
                "utf-8"
            );
            while (fileContent.includes(trigger)) {
                fileContent = fileContent.replace(trigger, snippetContent);
                await fs.writeFile(path, fileContent)
            }
        });
    });
}
