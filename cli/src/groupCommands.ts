import { program } from "commander";
import { snippets } from "./commands/snippets.js";
import { absord } from "./commands/absorb.js";
import fsc from "./commands/fs.js";

program.addCommand(snippets);
program.addCommand(absord);
program.addCommand(fsc)
