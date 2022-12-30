import * as fs from 'fs/promises'

interface CreateArgs {
    file?: string,
    content?: string
}

const create = async (name: string, args: CreateArgs) => {
    if (args.file) {
        return await fs.writeFile('./snippets/a', await fs.readFile(args.file))
    }
    return await fs.writeFile('./snippets/a', args.content || '')
}

export default create
