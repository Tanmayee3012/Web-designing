let num1=8
let num2=2
num1=parseInt(a)
num2=parseInt(b)
function add(){
    let temp=num1+num2
    document.getElementById("sum-el").textContent="Answer: "+temp
}

function subtract(){
    let temp=num1-num2
    document.getElementById("sum-el").textContent="Answer: "+temp
}

function multiply(){
    let temp=num1*num2
    document.getElementById("sum-el").textContent="Answer: "+temp
}

function divide(){
    let temp=num1/num2
    document.getElementById("sum-el").textContent="Answer: "+temp
}