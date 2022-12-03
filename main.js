//initializing calculation variables
var number1 = null;
var number2 = null;
var operator = "";
let calculation_finished = false;


//result text field initiatialization
const resultText = document.querySelector('#result-text');
resultText.textContent='0';

//Basic mathematical operator functions
const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {
    if (b===0){
        alert("Do not devide by zero!");
        number1 = null;
        number2 = null;
        operator = "";
        resultText.textContent = result;
    }
    else{
        return (a/b);
    }
}

//buttons responsive design
const buttons_bar=document.querySelector("#buttons-bar");
const buttons = buttons_bar.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('mouseover', e => e.target.style.backgroundColor='darkgray');
    element.addEventListener('mouseout', e => e.target.style.backgroundColor='rgb(45, 45, 45)');
});

//function performing the actual calculation
let operate = (a,b, op) => {
    if (op === "+") {
        return add(a,b);
    }
    else if (op === "-") {
        return substract(a,b);
    }
    else if (op === "*") {
        return multiply(a,b);
    }
    else if (op === "/") {
        return divide (a,b);
    };
};

//function, responsible for reading the mathmatical operator chosen
const operButton = document.querySelectorAll(".oper-button");
operButton.forEach(element => {
    element.addEventListener('click', e => {
        if (number1 === null){
            number1 = Number(resultText.textContent);
            operator = e.target.id;
            resultText.textContent=0;
        }
        else {
            number2 = Number(resultText.textContent);
            result = operate(number1, number2, operator);
            operator = e.target.id;
            number1 = result;
            number2 = null;
            resultText.textContent = result;
            calculation_finished = true;
        }        
    });
});

//function, responsible for reading the variables to be used in the calculation
const numButton = document.querySelectorAll(".num-button");
numButton.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (resultText.textContent === '0' || calculation_finished === true){
            calculation_finished = false;
            resultText.textContent=e.target.id;
        }
        else{
            resultText.textContent+=e.target.id;        
        };
    })
});

//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
    number1 = null;
    number2 = null;
    operator = "";
    resultText.textContent = "0";
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', function(){
    if (number1 && operator){
        number2 = Number(resultText.textContent);
        result = operate(number1, number2, operator);
        number1 = null;
        number2 = null;
        operator = "";
        resultText.textContent = result;
        calculation_finished = true;
    }
    else alert('Enter your numbers and choose the operator first');
})


/* 
        let current_operator = resultText.textContent[resultText.textContent.length-1]
        if (current_operator === '+' ||
        current_operator === '-' ||
        current_operator === '*' ||
        current_operator === '/'){
            number2 = e.target.id;// if the operator has been chosen tha velue becomes assigned to B
            resultText.textContent+=number2;
        }
        else {
*/