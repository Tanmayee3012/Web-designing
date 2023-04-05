let player={
    name :"Paras",
    chips: 200
}

let cards=[]
let sum=0
let hasBlackJack= false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" : $"+player.chips

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1 //generates numbers from 0 to 1 , 1 non inclusive
    if(randomNumber>10) randomNumber=10
    else if(randomNumber===1) randomNumber=11
    return randomNumber
}

function startGame(){
    if(player.chips>=10){
        isAlive=true
        hasBlackJack= false
        let firstCard= getRandomCard()
        let secondCard= getRandomCard()
        cards=[firstCard,secondCard]
        sum=firstCard+secondCard
        player.chips-=10
        playerEl.textContent=player.name+" : $"+player.chips
        renderGame()
    }
    else{
        cards=[]
        sum=0
        cardsEl.textContent="Cards: "
        for(let i=0;i<cards.length;i++)
        {
            cardsEl.textContent+= cards[i]+" "
        }

        sumEl.textContent="Sum: "+sum
        messageEl.textContent="Earn some, then come :)"
    }
}

function renderGame()
{
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+= cards[i]+" "
    }

    sumEl.textContent="Sum: "+sum
    if(sum<=20) {
        message="Do you want to draw a new card ??"
    }
    else if(sum === 21)
    {
        hasBlackJack=true
        message="Wohoo! You've got Blackjack! "
        player.chips+=50
        playerEl.textContent=player.name+" : $"+player.chips
    }
    else{
        isAlive=false
        message="You're out of the game!"
        player.chips-=30
        if(player.chips>0)
        {
            playerEl.textContent=player.name+" : $"+player.chips
        }
        else{
            playerEl.textContent=player.name+" : $"+0
        }
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false)
    {
        if(player.chips<=0){
            isAlive=false
            messageEl.textContent="Earn some, then come :)"
        }
        else{
            player.chips-=5
            playerEl.textContent=player.name+" : $"+player.chips
            let card=getRandomCard()
            sum+=card
            cards.push(card)
            renderGame()
        }
    }
}