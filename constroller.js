import config from "./config.js";
import { select } from '@inquirer/prompts';
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";

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

const createTemplateAction = async (options) => {
    try{

        if(options.template){
            const spinner = ora(`Verifying template...`).start();

            const template = config.templates.find(template => template.value === options.template);

            if(template){
                spinner.succeed(chalk.green("Template Verified!"));
                console.log(chalk.green(`${template.name} template verified successfully!`));
            }else{
                spinner.fail(chalk.red("Template not found!"));
                process.exit(1);
            }

        }else{
            const templates = await select({
                message: 'Select a template to create:',
                choices: config.templates,
            }).then((answer) => {
                const spinner = ora(`Creating ${answer} template...`).start();
                setTimeout(() => {
                    spinner.succeed(chalk.green("Template Selected!"));
                    console.log(chalk.green(`${answer} template created successfully!`));
                }, 1000);
            });
        }

  
    } catch (error) {
        console.log(error)
        console.error(chalk.red('Error: Unknown command. Use --help for usage.'));
        process.exit(1);
    }
 }

const helpAction = () => config.help();

const versionAction = () => {
    console.log(config.version);
}

const unknownCommandAction = () => {
    console.error(chalk.red('Error: Unknown command. Use --help for usage.'));
    process.exit(1);
}

export { helpAction, versionAction, exitAction, defaultAction, intoTemplate, unknownCommandAction, createTemplateAction };