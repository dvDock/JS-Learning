let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreCount = document.querySelector("#your-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw.")
    msg.innerText = "Game Draw! Play Again.";
    msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";

    } else {
        compScore++;
        compScoreCount.innerText = compScore;
        console.log("You lose.");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
};


const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    // Generate computar choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});