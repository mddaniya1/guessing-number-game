import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 20);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write you guess between 1 to 20: ",
    }
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, "SYs");
if (userGuess === systemGeneratedNo) {
    console.log("Yaaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
