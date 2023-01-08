import glob from "glob-promise";
import create from "../../functions/template/create.js";
import fs from 'fs/promises'

export default async function (dir: string, options: { out?: string }) {
    try {
        let files = await glob(`${dir}/**/*`, { nodir: true })
        //remove node_modules files and directory path
        files = files.filter((str) => !str.includes('node_modules'))
        files = files.map((str) => str.slice(dir.length))
        //creates and exports template
        const template = create(files)
        if (options.out) return await fs.writeFile(options.out, JSON.stringify(template, null, 2))
        await fs.writeFile('template.json', JSON.stringify(template, null, 2))

    } catch (error) {
        console.error('[World API]: Exporting fs failed');
    }
}
