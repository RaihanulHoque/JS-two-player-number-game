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

function inputValidation(score){
    if(score < 1)
        return alert("Please provide a positive value")
    // return playingToElm.textContent = score
}

//inputting and updating playing to score
formElm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    //getting the input
    const inputScore = inputScoreElm.value
    //validation check
    inputValidation(inputScore)
    playingToElm.textContent = inputScore
    inputScoreElm.value= ''
    //
    

    // console.log(inputScoreElm.value);
})
p1BtnElm.addEventListener('click', ()=>{
    const scoreLimit = Number(playingToElm.textContent);
    const p1Score = Number(p1ScoreElm.textContent);
    const p2Score = Number(p2ScoreElm.textContent);
    if(scoreLimit > p1Score && scoreLimit > p2Score){
        p1ScoreElm.textContent = p1Score + 1
    }else if(scoreLimit === p1Score){
        p1ScoreElm.style.color = 'green' 
        p2ScoreElm.style.color = 'red' 
        alert("Player 1 win");
    }
})

p2BtnElm.addEventListener('click', ()=>{
    const scoreLimit = Number(playingToElm.textContent);
    const p1Score = Number(p1ScoreElm.textContent);
    const p2Score = Number(p2ScoreElm.textContent);
    if(scoreLimit > p1Score && scoreLimit > p2Score ){
        p2ScoreElm.textContent = p2Score + 1
    }else if(scoreLimit === p2Score){
        p2ScoreElm.style.color = 'green' 
        p1ScoreElm.style.color = 'red' 
        alert("Player 2 win");
    }
})

resetBtn.addEventListener('click', ()=>{
    inputScoreElm.value = ''
    playingToElm.textContent = 0
    p1ScoreElm.textContent = 0
    p2ScoreElm.textContent = 0
})