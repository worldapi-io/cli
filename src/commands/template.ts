import { Command } from "commander";
import _export from "../actions/template/export.js";
export const template = new Command()

template
    .name("templates")
    .version('v0.1.1')
    .description("Create, search, update, export, delete or clone a template")

template.command('export')
    .description("Export a directory into an fs template you can recreate")
    .argument('<dir>', "The directory to export into a template")
    .option('-o, --output <out>', 'The file to export the template into (default: cwd/template.json)')
    .action(_export)
