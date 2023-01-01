import { program } from "commander";
import { snippets } from "./commands/snippets.js";
import { absord } from "./commands/absorb.js";
import parseExtensionCommands from "./parseExtensions.js";


program.addCommand(snippets);
program.addCommand(absord);
await parseExtensionCommands();
