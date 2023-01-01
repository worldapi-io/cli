import { program } from "commander";
import { snippets } from "./commands/snippets.js";

program.addCommand(snippets);
