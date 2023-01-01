import { Command } from "commander";
import absorbHandler from "../actions/absorb.js";
export const absord = new Command();

absord
    .name("absorb")
    .version("0.0.1")
    .description("Absord the configuration of a folder into the cli")
    .argument("<path>", "Path to the folder to absorb")
    .action(absorbHandler);
