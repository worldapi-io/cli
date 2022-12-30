import * as fs from 'fs/promises';
const create = async (name, args) => {
    if (args.file) {
        return await fs.writeFile('./snippets/a', await fs.readFile(args.file));
    }
    return await fs.writeFile('./snippets/a', args.content || '');
};
export default create;
