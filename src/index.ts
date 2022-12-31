#!/usr/bin/env node
import "./groupCommands.js";
import { program } from "commander";
import { checkProperConfiguration } from "./functions/checkProperConfiguration.js";

await checkProperConfiguration();

program.parse(process.argv);
