// console.log("connected")
//must have clear Idea about the project
//Have clear idea about the Feature

//selectors
const p1ScoreElm = document.querySelector('#p1Score')
const p2ScoreElm = document.querySelector('#p2Score')
const playingToElm = document.querySelector('.playingTo')
const inputScoreElm = document.querySelector('#inputScore')
const p1BtnElm = document.querySelector('#p1Btn')
const p2BtnElm = document.querySelector('#p2Btn')
const resetBtn = document.querySelector('#resetBtn')
const formElm = document.querySelector('form')

//Winnning Score
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
const players = ['p1', 'p2'];//
let turnPlayer =players[Math.floor(Math.random() * players.length)];

 //Update wining score
playingToElm.textContent = winningScore;

console.log(turnPlayer)
//disable playerBtn based on Turn
turnPlayer === 'p1'
? p2BtnElm.setAttribute('disabled', 'disabled')
: p1BtnElm.setAttribute('disabled', 'disabled')


function actionReset(){
    //set all scores to default 
    p1Score = 0;
    p2Score = 0;
    winningScore = 5;
    gameOver = false;

    //Set all element's textContent and style
    playingToElm.textContent = winningScore
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    p2ScoreElm.style.color = 'black' 
    p1ScoreElm.style.color = 'black'
    //withdraw disabled attribute from both of the buttons
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
}
function inputValidation(score){
    if(score < 1)
        return alert("Please provide a positive value")
    // return playingToElm.textContent = score
}

//inputting and updating playing to score
formElm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    //Reset all
    actionReset()
    //getting the input
    const inputScore = Number(inputScoreElm.value)
    //validation check
    inputValidation(inputScore)
    //Saving it into Data Layer
    winningScore = inputScore

    playingToElm.textContent = inputScore
    inputScoreElm.value= ''
   
})

function handleWiningState(){
    if(p1Score === winningScore){
        gameOver === true
        //Message and color change
        alert("Player 1 win");
        p1ScoreElm.style.color = 'green' 
        p2ScoreElm.style.color = 'red' 
    }else if(p2Score === winningScore){
        gameOver === true
        //Message and color change
        alert("Player 2 win");
        p2ScoreElm.style.color = 'green' 
        p1ScoreElm.style.color = 'red' 
    }  
    if(p1Score === winningScore || p2Score === winningScore){
        p1BtnElm.setAttribute('disabled', 'disabled')
        p2BtnElm.setAttribute('disabled', 'disabled')
    }
}


p1BtnElm.addEventListener('click', (evt)=>{
    // increase the count and update dom
        if(turnPlayer=== 'p1' && !gameOver && p1Score < winningScore){
            p1Score++;
            //Update Dom
            p1ScoreElm.textContent = p1Score;
            //Change Player Turn
            turnPlayer = 'p2'
            //disable Player 1
            p1BtnElm.setAttribute('disabled', 'disabled')
            //Enable Player 2
            p2BtnElm.removeAttribute('disabled')
        }
        handleWiningState()
})

p2BtnElm.addEventListener('click', (evt)=>{
    // increase the count and update dom
    if(turnPlayer=== 'p2' && !gameOver && p2Score < winningScore){
        p2Score++;
        p2ScoreElm.textContent = p2Score;
        turnPlayer = 'p1'
        p2BtnElm.setAttribute('disabled', 'disabled')
        p1BtnElm.removeAttribute('disabled')
    }
    handleWiningState()    
})

//Listening to Reset Button
resetBtn.addEventListener('click', ()=>{
    actionReset()
})