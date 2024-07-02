import inquirer from "inquirer";
import chalk from "chalk";
let lives = 0;
let correctNumber = Math.floor(Math.random() * 10 + 1);
console.log(chalk.inverse("This is Simple CLI Number Guesing Game in which you have only 3 Lives"));
const userInput = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: chalk.magenta("Enter a number (1-10) to Play a Game"),
    },
]);
lives++;
if (userInput.userNumber === correctNumber) {
    console.log(chalk.bgGreen("Congratulation! You guessed it right."));
}
else if (lives < 3) {
    const anotherAttempt = await inquirer.prompt([
        {
            name: "userNumber",
            type: "number",
            message: chalk.blue(`You have ${3 - lives} lives left try again:`),
        },
    ]);
    lives++;
    if (anotherAttempt.userNumber === correctNumber) {
        console.log(chalk.bgGreen("Congratulation! You guessed it right."));
    }
    else if (lives < 3) {
        const secondAttempt = await inquirer.prompt([
            {
                name: "userNumber",
                type: "number",
                message: chalk.yellow(`You have ${3 - lives} lives left try again:`),
            },
        ]);
        lives++;
        if (anotherAttempt.userNumber === correctNumber) {
            console.log(chalk.bgGreen("Congratulation! You guessed it right."));
        }
        else
            console.log(chalk.bgRed("Ohoo You ran out of lives. Better Luck Next Time!!!"));
    }
}
