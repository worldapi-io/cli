import { Command } from "commander";
import search from "../actions/fs/search.js";
const fs = new Command()

fs.name('fs')
    .version('0.0.1')

fs.command('search')
    .description('Search a file or a directory for a string')
    .argument('<query>', 'Search query')
    .option('-d, --dir <dir>', 'Directory to search in. Usage: -d=PATH_TO_DIR')
    .option('-f, --file <file>', 'File to search in')
    .action(search)


export default fs
