let number1 = 0;
let number2 = 0;
let operator = "";

const calcAdd = (a,b) => a+b;
const calcSubstract = (a,b) => a-b;
const calcMultiply = (a,b) => a*b;
const calcDivide = (a,b) => {
    if (b===0){
        alert("Do not devide by zero!");
    }
    else{
        return (a/b);
    }
}

const buttons_bar=document.querySelector("#buttons-bar");
const buttons = buttons_bar.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('mouseover', e => e.target.style.backgroundColor='darkgray');
    element.addEventListener('mouseout', e => e.target.style.backgroundColor='rgb(45, 45, 45)');
});

let operate = (a,b, op) => {
    if (op === "plus") {
        return calcAdd(a,b);
    }
    else if (op === "minus") {
        return calcSubstract(a,b);
    }
    else if (op === "multiply") {
        return calcMultiply(a,b);
    }
    else if (op === "divide") {
        return calcDivide (a,b);
    };
};

const operButton = document.querySelectorAll(".operButton");
operButton.forEach(element => {
    element.addEventListener('click', e => op = e.target.id);
});