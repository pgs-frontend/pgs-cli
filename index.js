#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
program.version("1.0.0").description("PGS CLI 2025 | Templates | Devtools");

console.log(
  chalk.green(figlet.textSync("PGS CLI", { horizontalLayout: "full" }))
);
console.log(
chalk.green(
    "-----------------------------------------------------\n",
    "       PGS CLI 2025 | Templates | Devtools\n",
    "-----------------------------------------------------\n",
),
)
console.log(
    "🚀 CLI for Generating Project Templates 🛠\n\n ",
    "-----------------------------------------------------\n\n",
    "Commands:\n\n",
    "--h        For more information\n",
    "--v        For version\n",
    "--ps       For listing available templates\n",
    "create     For create a new template\n",
    "delete     For delete a template\n\n",
    "-----------------------------------------------------\n\n",
    "For more about our products and services,\n",
    "Visit our website: " + chalk.blue.underline("https://pgsuae.com") + "\n\n",
    "-----------------------------------------------------\n",
);


program.action(() => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What's your name?",
        },
      ])
      .then((answers) => {
        console.log(chalk.green(`Hey there, ${answers.name}!`));
      });
  });

program.parse(process.argv);