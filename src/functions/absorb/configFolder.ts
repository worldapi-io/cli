import * as fs from 'fs/promises'
import refs from '../../refs.js'
import getConfig from '../getConfig.js'

export default async function absorbConfigFolder(path: string) {
    console.log(`[World API]: Absorbing config folder ${path}...`)
    const folder = await fs.readdir(`${path}/config`)
    if (folder.includes("snippets.json")) {
        const internal = await getConfig()
        const conf = await fs.readFile(`${path}/config/snippets.json`, "utf-8")
        const _json = JSON.parse(conf)
        const json = Object.assign(internal.snippets, _json)
        await fs.writeFile(`${refs.rootDir}/config.json`, JSON.stringify({ snippets: json }))

    }
}
