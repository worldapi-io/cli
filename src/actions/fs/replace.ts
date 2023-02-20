import glob from "glob-promise";
import fs from "fs/promises";

export default async function (path: string, options: { query: string, replace: string }) {
    try {
        const files = await glob(`${path}/**/**/*.*`, { nodir: true, ignore: ['**/node_modules/**', '**/dist/**'] })
        files.forEach(async (file) => {
            let fileContents = await fs.readFile(file, 'utf-8')
            while (fileContents.includes(options.query)) {
                fileContents = fileContents.replace(options.query, options.replace)
            }
            await fs.writeFile(file, fileContents)
            return
        })
        return console.log(`[World API]: Replaced ${options.query} with ${options.replace} in ${files.length} files.`);

    } catch (error) {
        console.error('[World API]: An error occured while querying the file system.', error);
    }
}
