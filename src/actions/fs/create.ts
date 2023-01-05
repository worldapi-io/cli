import fs from 'fs/promises';
import parseDirectory from '../../functions/fs/parseDirectory.js';

export default async function create(json: string, options: { createDir?: string }) {
    try {
        if (options.createDir && options.createDir !== ".") await fs.mkdir(options.createDir, { recursive: true });
        const _json = await fs.readFile(json, 'utf-8');
        const mappings = JSON.parse(_json) as { files?: string[] | undefined; folders?: object | undefined; }
        if (mappings.constructor !== Object) console.log('[World API]: Invalid JSON file. Please make sure the JSON file is an object.');
        await parseDirectory(mappings, options.createDir || './');
    } catch (error) {
        console.error('[World API]: Error while creating mappings');
        console.log(error);

    }
}

