//initializing calculation variables
var number1 = null;
var number2 = null;
var operator = "";
let calculation_finished = false;


//result text field initiatialization
const resultText = document.querySelector('#result-text');
resultText.textContent='0';

//Basic mathematical operator functions
const add = (a,b) => Number(a)+Number(b);
const substract = (a,b) => Number(a)-Number(b);
const multiply = (a,b) => Number(a)*Number(b);
const divide = (a,b) => {
    if (b===0){
        alert("Do not devide by zero!");
        number1 = null;
        number2 = null;
        operator = "";
        resultText.textContent = '0';
    }
    else{
        return (Number(a)/Number(b));
    }
}

const floatResult = (result) => {
    result = Number(result)
    if (Math.round(result) !== result) return result.toFixed(4)
    else return result
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
        return floatResult(add(a,b));
    }
    else if (op === "-") {
        return floatResult(substract(a,b));
    }
    else if (op === "*") {
        return floatResult(multiply(a,b))
    }
    else if (op === "/") {
        return floatResult(divide (a,b));
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
            calculation_finished = true;
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


//clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
    number1 = null;
    number2 = null;
    operator = "";
    resultText.textContent = "0";
    calculation_finished = false;
})

//delete button
const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', function(){
    if (resultText.textContent.length > 1){
        resultText.textContent = resultText.textContent.slice(0,-1);
    }
    else if (resultText.textContent !== "0"){
        resultText.textContent = "0";
    }
})

//plusmin button
const plusminButton = document.querySelector('#plusmin');
plusminButton.addEventListener('click', function(){
    if (resultText.textContent !== "0"){
        if (Number(resultText.textContent)>0){
            resultText.textContent = "-" + resultText.textContent;
        }
        else{
            resultText.textContent = resultText.textContent.slice(1,);
        }
    }
});

//decimal point button fix
const pointButton = document.querySelectorAll("#point");
pointButton.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (!(resultText.textContent.indexOf(".")>0)){ //prevents adding a second period to a number
            if (resultText.textContent==="0"){
                calculation_finished = false;
                resultText.textContent="0.";
            }
            else{
                resultText.textContent+=".";        
            };
        }
    })
});