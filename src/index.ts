#!/usr/bin/env node
import { snippets as snippetsCommand } from "./commands/snippets.js"
import { program } from "commander"

program.addCommand(snippetsCommand)

program.parse(process.argv)
