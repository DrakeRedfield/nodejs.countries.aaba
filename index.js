require('dotenv').config();
const Search = require("./models/searchs");
const { readConsole, inquirerMenu, pause } = require("./utils/inquirer");
const { menuOptions } = require("./utils/utils");

const main = async () => {
    opt = '0';
    const searchs = new Search();
    const menuFunctions = menuOptions(searchs);

    do {
        //Display Menu
        const { option } = await inquirerMenu();
        console.clear();
        opt = option;
        console.log(opt);
        await menuFunctions[opt](readConsole);

        if( opt !== '0') await pause();
    } while (opt !== '0');
};

main();