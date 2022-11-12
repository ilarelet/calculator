//initializing calculation variables
let number1 = 0;
let number2 = 0;
let operator = "";

//Basic mathematical operator functions
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

//buttons responsive design
const buttons_bar=document.querySelector("#buttons-bar");
const buttons = buttons_bar.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('mouseover', e => e.target.style.backgroundColor='darkgray');
    element.addEventListener('mouseout', e => e.target.style.backgroundColor='rgb(45, 45, 45)');
});

//function performing the actual calculation
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

//function, responsible for reading the mathmatical operator chosen
const operButton = document.querySelectorAll(".operButton");
operButton.forEach(element => {
    element.addEventListener('click', e => op = e.target.id);
});

//function, responsible for reading the variables to be used in the calculation
const numButton = document.querySelectorAll(".numButton");
operButton.forEach(element => {
    element.addEventListener('click', e => {
        if (op === ''){
            a= e.target.id; //A is the first variable, hence if the operator is not yet picked we assign the value to it
            
        }
        else {
            b = e.target.id;// if the operator has been chosen tha velue becomes assigned to B

        }
    })
});