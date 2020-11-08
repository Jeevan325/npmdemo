console.log("First npm package");

var chalk = require('chalk');

console.log(chalk.green("Successful! ") + 
chalk.red.underline.bold("Error ") + chalk.green("Done!"));