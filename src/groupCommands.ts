import { program } from "commander";
import { snippets } from "./commands/snippets.js";
import { absorb } from "./commands/absorb.js";
import fsc from "./commands/fs.js";

program.addCommand(snippets);
program.addCommand(absorb);
program.addCommand(fsc)
