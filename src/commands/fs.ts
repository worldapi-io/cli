import { Command } from "commander";
import create from "../actions/fs/create.js";
import eliminate from "../actions/fs/eliminate.js";
import replace from "../actions/fs/replace.js";
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

fs.command("replace")
    .description("Searches the file path for a string and replaces it with another string")
    .argument("<path>", "Directory to execute the command in")
    .option("-q, --query <query>", "Query to search for")
    .option("-r, --replace <replace>", "String to replace the query with")
    .action(replace)


export default fs
