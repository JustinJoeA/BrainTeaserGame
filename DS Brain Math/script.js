let question = document.getElementById(`question`);
let submitBtn = document.getElementById(`submitBtn`);

const mathEquation = `+-`;

let mathFunction;
let results = [];
const firstNumberContainer = [];
const secondNumberContainer = [];

function plus(firstNumber, secondNumber) {
    let plus = firstNumber + secondNumber;
    return plus;
}

function minus(firstNumber, secondNumber) {
    let minus = firstNumber - secondNumber;
    return minus;
}

function questionList() {

    for (i = 0; i < 10; i++) {
        let firstNumber = Math.floor(Math.random() * 10) + 1;
        let secondNumber = Math.floor(Math.random() * 10) + 1;
        mathFunction = mathEquation.charAt(Math.floor(Math.random() * mathEquation.length))

        firstNumberContainer.push(firstNumber);
        secondNumberContainer.push(secondNumber);

        question.innerHTML += `${i + 1}. ${firstNumberContainer[i]} ${mathFunction} ${secondNumberContainer[i]} =` + `<input id = "userInput${i}">` + `</br>`;

        if (mathFunction === `+`) {
            results.push(plus(firstNumberContainer[i], secondNumberContainer[i]));
        } else {
            results.push(minus(firstNumberContainer[i], secondNumberContainer[i]));
        }
    }
    
    submitBtn.onclick = function check() {
        let userInputValue = [];
        let scoring = [];
        let finalScore;

        for (j = 0; j < i; j++) {
            let userInput = document.getElementById(`userInput${j}`).value;
            userInput = Number(userInput);
            userInputValue.push(userInput);
            
            userInputValue[j] === results[j]? scoring.push(true) : scoring.push (false);
            finalScore = scoring.filter(filterTrue).length;
        }

        function filterTrue(e){
            return e == true;
        }
        console.log(results);
        console.log(userInputValue);
        console.log(scoring);
        console.log(finalScore);
    }
    return;
}


questionList()
