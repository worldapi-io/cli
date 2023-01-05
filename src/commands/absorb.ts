import { Command } from "commander";
import absorbHandler from "../actions/absorb.js";
export const absorb = new Command();

absorb
    .name("absorb")
    .version("0.0.1")
    .description("Absorb the worldapi configuration of a folder into the cli")
    .argument("<path>", "Path to the folder to absorb")
    .action(absorbHandler);
