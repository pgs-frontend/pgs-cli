import config from "./config.js";
import { select } from '@inquirer/prompts';
import chalk from "chalk";
import figlet from "figlet";

const intoTemplate = ()=> {
    console.log(
        chalk.green(
            "\n-----------------------------------------------------",
        ),
        )
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
        "For more about our products and services,\n",
        "Visit our website: " + chalk.blue.underline("https://pgsuae.com") + "\n\n",
        "-----------------------------------------------------\n",
    );
    
}

const defaultAction = () => config.help();

const exitAction = () => {
    console.log(chalk.yellow("👋 Thanks for using PGS CLI! Goodbye!"));
    process.exit(0);
}

const createAction = async () => {
    const answer = await select({
        message: 'Select a template to create:',
        choices: config.templates,
    });
    
    console.log(chalk.green(`Creating ${answer} template...`));
}

const helpAction = () => config.help();

const versionAction = () => {
    console.log(config.version);
}

export { createAction, helpAction, versionAction, exitAction, defaultAction, intoTemplate };