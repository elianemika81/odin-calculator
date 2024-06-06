let num1;
let num2;
let operator;
let text1 = document.querySelector('#display1');
let text2 = document.querySelector('#display2');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let num_buttons = document.querySelectorAll('.number-button');
let equals = document.querySelector('#equals');
let decimal = document.querySelector('#decimal');
const numerical = '0123456789.';

let power = function(a,b) {
    return Math.pow(a,b);
};

function operate(a,operator,b){
    if(operator=='+'){
        return a + b;
    }

    if(operator=='-'){
        return a - b;
    }

    if(operator=='x'){
        return a*b
    }

    if(operator=='/'){
        if(b==0){
            buttons = document.querySelectorAll('button');
            buttons.forEach((button)=>{
                button.disabled =true;
            });

            document.querySelector('#clear').disabled = false;

            return "divison by 0 is illegal"}
        return a/b
    }

}

decimal.addEventListener('click',()=>{
    if(!text2.innerText.includes('.')){
        text2.innerText += '.';
    }
})

num_buttons.forEach(element => {
    element.addEventListener('click',()=>{
        text2.innerText = text2.innerText + element.innerText;
    })
});

function operation (){
    if(Number(text2.innerText)){
        num1 = Number(text2.innerText);
    }
    text1.innerText = num1 + `${operator}`;
    text2.innerText = '';
}

function calculate(){
    if(operator && Number(num1)){
        num2 = Number(text2.innerText.split('')
            .filter((character) => numerical.includes(character))
            .join(''));
        if(num2){
            text2.innerText= operate(num1,operator,num2)
            
        };
    }
}

plus.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='+';
    operation();}

})

multiply.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='x';
    operation();}
})

divide.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='/';
    operation();}
})

minus.addEventListener('click',()=>{
    if(operator||text2.innerText){
    calculate();
    operator='-';
    operation();}
})

function returnequals() {
    num2 = Number(text2.innerText.split('')
    .filter((character) => numerical.includes(character))
    .join(''));

    if(num1 && operator && num2){
    text1.innerText += text2.innerText;
    text2.innerText = operate(num1,operator,num2);
    num1 = NaN;
    num2 = NaN;
    operator = NaN;}
}

equals.addEventListener('click',()=>{
    num2 = Number(text2.innerText.split('')
    .filter((character) => numerical.includes(character))
    .join(''));

    if(num1 && operator && num2){
    text1.innerText += text2.innerText;
    text2.innerText = operate(num1,operator,num2);
    num1 = NaN;
    num2 = NaN;
    operator = NaN;}
})

window.addEventListener('keydown', (e)=>{
    let keyValue = e.key;
    if((keyValue>=0 && keyValue<=9)){
        text2.innerText = text2.innerText + keyValue;
    }
    else if(keyValue==='.'){
        if(!text2.innerText.includes('.')){
            text2.innerText += '.';
        }
    }
    else if(keyValue==='Enter'){
        returnequals();
    }
    else if(keyValue === '+' ||
    keyValue === '-' || 
    keyValue === 'x' ||
    keyValue === '/'){
        if(operator||text2.innerText){
        calculate();
        operator=`${keyValue}`;
        operation();
    }}
    else if(keyValue ==='*'){
        if(operator||text2.innerText){
        calculate();
        operator= 'x';
        operation();
    }}

})
