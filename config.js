import chalk from "chalk";

const config = {
    templates: [
        {
            name: chalk.green('PGS Bundle 2'),
            value: 'pgs-bundle-2',
            description: 'Create a new PGS Bundle 2 project'
        },
        {
            name: chalk.blue('React + Tanstack + Tailwind'),
            value: 'react-tanstack-tailwind',
            description: 'Create a new React project'
        },
        {
            name: chalk.cyan('React Native + Tanstack + Nativewind'),
            value: 'react-native-tanstack-nativewind',
            description: 'Create a new React Native project'
        },
        {
            name: chalk.red('Laravel'),
            value: 'laravel',
            description: 'Create a new Laravel project'
        },
        {
            name: chalk.greenBright('Node + Express'),
            value: 'node-express',
            description: 'Create a new Node JS project'
        },
        {
            name: chalk.yellowBright('Bun + Hono'),
            value: 'bun-hono-drizzle',
            description: 'Create a new Bun JS project'
        }
    ],
    version: "1.0.0",
    help: ()=> {
        console.log(    
            "Commands:\n\n",
            "--h        For more information\n",
            "--v        For version\n",
            "--ps       For listing available templates\n",
            "create     For create a new template\n",
            "exit       For exit the CLI\n",
            "delete     For delete a template\n\n",
            "-----------------------------------------------------\n\n",
        );
    },
    commands: {
        help: '--h' || '-h' || '-help',
        version: '--v' || '-v' || '-version',
        listTemplates: '--ps' || '-ps' || '-list-templates',
        create: 'create',
        delete: 'delete',
        exit: 'exit',
    }
}

export default config;