#!/usr/bin/env node

import { program } from "commander";
import config from "./config.js";
import { helpAction, versionAction, exitAction, defaultAction, intoTemplate, unknownCommandAction, createTemplateAction } from "./constroller.js";

intoTemplate();

program
.action(defaultAction);

program
.command(config.commands.version)
.action(versionAction);

program
.command(config.commands.help)
.action(helpAction);

program
.command(config.commands.create)
.option('-c, --template <type>', 'Specify a project template (e.g., basic)')
.action(createTemplateAction);


program
.command(config.commands.exit)
.action(exitAction);

program
.on('command:*', unknownCommandAction);

program.parse(process.argv);