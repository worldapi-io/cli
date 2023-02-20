import searchFile from "../../functions/fs/searchFile.js";
import glob from "glob-promise";

interface Options {
    dir?: string,
    file?: string
}

export default async function (query: string, options: Options) {
    try {
        if (!options.dir && !options.file) return console.log('Please specify a directory or a file to search in using flags.');
        if (!options.dir) return
        if (options.file) return await searchFile(query, options.file);
        console.log(`[World API]: Searching for ${query} in ${options.dir}...`);

        const files = await glob(`${options.dir}/**/*`, { nodir: true, ignore: ['**/node_modules/**'] })

        if (files.length === 0) return console.log('No files found.');
        for (const file of files) await searchFile(query, file);
    } catch (error) {
        console.error('[World API]: An error occurred while querying the file system.');

    }
}
