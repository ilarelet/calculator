let add = (a,b) => a+b;
let substract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => {
    if (b===0){
        alert("Do not devide by zero!");
    }
    else{
        return a/b;
    }
}

let buttons_bar=document.querySelector("#buttons-bar");
let buttons = buttons_bar.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('mouseover', e => e.target.style.backgroundColor='darkgray');
    element.addEventListener('mouseout', e => e.target.style.backgroundColor='rgb(45, 45, 45)');
});