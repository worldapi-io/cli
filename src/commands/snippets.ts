import { Command } from "commander";
import create from "../actions/snippets/create.js";
export const snippets = new Command();

snippets
    .name("snippets")
    .description("Manage snippets")
    .version("0.0.1")


snippets.command("list")
    .description("List snippets")

snippets.command("create")
    .description("Create a snippet")
    .argument("<name>", "Snippet name")
    .option("-c, --content <content>", "Snippet content")
    .option("-f, --file <file>", "Snippet file source (Overwrites content)")
    .action(create)

snippets.command("delete")
    .description("Delete a snippet")
    .argument("<name>", "Snippet name")
