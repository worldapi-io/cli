import { Command } from "commander";
import create from "../actions/fs/create.js";
import search from "../actions/fs/search.js";
const fs = new Command()

fs.name('fs')
    .version('0.0.2')

fs.command('search')
    .description('Search a file or a directory for a string')
    .argument('<query>', 'Search query')
    .option('-d, --dir <dir>', 'Directory to search in.')
    .option('-f, --file <file>', 'File to search in')
    .action(search)

fs.command('create')
    .description('Creates a directory with mappings from a json file in the current directory')
    .argument('<json>', 'Path to json file')
    .option('-cdir, --createDir <createDir>', 'Directory to create.')
    .action(create)

export default fs
