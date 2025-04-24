#!/usr/bin/env node

import { program } from "commander";
import config from "./config.js";
import { createAction, helpAction, versionAction, exitAction, defaultAction, intoTemplate } from "./constroller.js";

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
.action(createAction);

program
.command(config.commands.exit)
.action(exitAction);


program.parse(process.argv);