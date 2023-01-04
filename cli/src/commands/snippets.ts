import { Command } from "commander";
import create from "../actions/snippets/create.js";
import delete_cmd from "../actions/snippets/delete.js";
import edit from "../actions/snippets/edit.js";
import list from "../actions/snippets/list.js";
import paste from "../actions/snippets/paste.js";
import print from "../actions/snippets/print.js";
import watch from "../actions/snippets/watch.js";
export const snippets = new Command();

snippets.name("snippets").description("Manage snippets").version("0.0.1");

snippets.command("list").description("List snippets").action(list);

snippets
  .command("create")
  .description("Create a snippet")
  .argument("<name>", "Snippet name")
  .option("-c, --content <content>", "Snippet content")
  .option("-f, --file <file>", "Snippet file source (Overwrites content)")
  .option("-t, --trigger <trigger>", "Snippet trigger")
  .action(create);

snippets
  .command("delete")
  .description("Delete a snippet")
  .argument("<name>", "Snippet name")
  .action(delete_cmd);

snippets
  .command("edit")
  .description("Edit a snippet")
  .argument("<name>", "Snippet name")
  .option("-c, --content <content>", "Snippet content")
  .option("-f, --file <file>", "Snippet file source (Overwrites content)")
  .option("-t, --trigger <trigger>", "Snippet trigger")
  .action(edit);

snippets
  .command("print")
  .description("Prints a snippet's content")
  .argument("<name>", "Snippet name")
  .action(print);

snippets
  .command("paste")
  .description("Pastes a snippet's content into a file")
  .argument("<name>", "Snippet name")
  .argument("<file>", "File to paste into")
  .action(paste);

snippets
  .command("watch")
  .description("Watch snippets")
  .argument("<Path>", "Path to watch")
  .action(watch);
