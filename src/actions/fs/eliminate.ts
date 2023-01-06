import glob from "glob-promise";
import fs from "fs/promises";

export default async function (query: string, path: string, options: { dir: boolean }) {
    try {
        console.log(`[World API]: Eliminating ${query} from ${path}...`);

        const paths = await glob(`${path}/**`)
        const _promises = paths.map(async (pt) => {
            const stats = await fs.stat(pt)
            if (options.dir && stats.isDirectory() && pt.includes(query)) {
                return fs.rmdir(pt)
            } else if (!options.dir && stats.isFile() && pt.includes(query)) {
                return fs.rm(pt)
            }
        })
        await Promise.all(_promises)
        console.log(`[World API]: Eliminated ${query} from ${path}.`);
    } catch (error) {
        console.error('[World API]: An error occured while querying the file system.');
    }
}
