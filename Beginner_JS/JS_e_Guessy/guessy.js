let predicted=[]
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let guessedEl=document.getElementById("guessed-el")
console.log(0)

inputBtn.addEventListener("click",function(){
    doTheFol()
    console.log(1)
})

// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     inputEl.value=""
//     renderLeads()
// })
function doTheFol(){
    console.log(2)
    let guessy = Math.floor(Math.random()*100)+1
    predicted.push(inputEl.value)
    console.log(predicted[0])
    inputEl.value=""
    printEm()
}

function printEm(){
    console.log(4)
    for(let i=0;i<predicted.length;i++){
        guessedEl.textContent += predicted[i] +" - "
    }
}