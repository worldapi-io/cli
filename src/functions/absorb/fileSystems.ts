import fs from 'fs/promises';
import create from '../../actions/fs/create.js';

export default async function (path: string) {
    try {
        console.log(`[World API]: Absorbing file systems from ${path}...`);
        const fileSystemsFolder = await fs.readdir(`${path}/file-systems`);
        let fsFiles = fileSystemsFolder.filter((file) => file.endsWith('.json'));
        for (let file of fsFiles) {
            await create(`${path}/file-systems/${file}`, { createDir: file.slice(0, -5) });
        }
        console.log(`[World API]: Absorbed file systems from ${path}!`);

    } catch (error) {
        return console.log(error);
    }
}
