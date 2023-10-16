// Event listeners 
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) { 
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(); 
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType); 
            }
        });
    }
    runGame("addition");
});
//Functions 
/**
 * runGame () is a function which generates two random numbers for the user
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1,num2); 
    }
    else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2); 
    }
        else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
let userAnswer = parseInt(document.getElementById("answer-box").value); 
let calculatedAnswer= calculateCorrectAnswer(); 
let iscorrect = userAnswer === calculatedAnswer[0]; 

if (iscorrect) {
    alert ("Answer is correct! Well Done!")
    incrementScore();
} else { 
    alert (`Awww... you entered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
    incrementWrongAnswer(); 
}
runGame (calculatedAnswer[1]); 
}

function calculateCorrectAnswer() {
let operand1 = parseInt (document.getElementById('operand1').innerText); 
let operand2 = parseInt (document.getElementById('operand2').innerText);
let operator = document.getElementById('operator').innerText;
console.log (operator);

if (operator ==="+") {
    return [operand1 +operand2 , "addition"]; 
} else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
}
else if (operator === "-") {
    return [operand1 - operand2, "subtract"]; 
}
else {
    alert(`Unimplemented operator ${operator}`); 
    throw `Umplemented operator ${operator}. Aborting!`; 
}
}

function incrementScore() {
let oldScore = parseInt(document.getElementById("correct-score").innerText); 
document.getElementById("correct-score").innerText = oldScore+1; 
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("Incorrect").innerText); 
        document.getElementById("Incorrect").innerText = oldScore+1; 
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
document.getElementById('operand1').textContent = operand1; 
document.getElementById('operand2').textContent = operand2; 
document.getElementById('operator').textContent ="x"; 
}
