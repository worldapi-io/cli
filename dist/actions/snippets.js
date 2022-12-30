import { Command } from "commander";
export const program = new Command();
program
    .name("snippets")
    .description("Manage snippets")
    .version("0.0.1");
program.command("list")
    .description("List snippets");
program.command("create")
    .description("Create a snippet")
    .argument("<name>", "Snippet name")
    .argument("<content>", "Snippet content")
    .option("-f, --file <file>", "Snippet file source")
    .action(() => console.log("a"));
