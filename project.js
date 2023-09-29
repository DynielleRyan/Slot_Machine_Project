//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play again

const prompt = require("prompt-sync")();



const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); //Parse is to convert a string to some value

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }else{
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines); //parse is to convert a string to an actual number

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again.");
        }else{
            return numberOfLines;
        }
    }
}

const getBet = (balance) => {
    while (true) {
        const bet = prompt ("enter the bet per line: ");
        const numberBet = parseFloat(bet); //parse is to convert a string to an actual number

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / numberOfLines) ){
            console.log(" Invalid bet,Please try again");
        }else{
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);


//Continue on this