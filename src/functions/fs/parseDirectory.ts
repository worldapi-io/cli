import fs from 'fs/promises'

export default async function parseDirectory(dir: { files?: string[], folders?: object }, path: string) {
    try {
        if (dir.files) for (const file of dir.files) await fs.writeFile(`${path}/${file}`, '')
        if (dir.folders) {
            const entries = Object.entries(dir.folders)
            for (const folder in dir.folders) {
                const fd = entries.find((v) => v[0] === folder)
                if (fd) {
                    const f = await fs.readdir(path);
                    if (!f.includes(folder)) await fs.mkdir(`${path}/${folder}`)
                    await parseDirectory(fd[1], `${path}/${folder}`)
                }
            }
        }

    } catch (error) {
        return console.log(error);

    }
}
