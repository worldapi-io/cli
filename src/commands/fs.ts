import { Command } from "commander";
import create from "../actions/fs/create.js";
import eliminate from "../actions/fs/eliminate.js";
import search from "../actions/fs/search.js";
const fs = new Command()

fs.name('fs')
    .version('0.0.2')
    .description("Various commands that control the file system")

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

fs.command('eliminate')
    .description("Searches the given path for files or folders with a specifiic name and deletes them")
    .argument("<query>", "Query to execute the command with")
    .argument("<path>", "Path to the directory to search in")
    .option('-d, --dir', 'Query is a directory')
    .action(eliminate)

export default fs
