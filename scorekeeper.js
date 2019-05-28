let p1 = document.querySelector("#p1button");
let p1Display = document.querySelector('#p1Display');
let p1Score = 0;
let p2 = document.querySelector("#p2button");
let p2Display = document.querySelector('#p2Display');
let p2Score = 0;
let inputnum = document.querySelector("input");
let resetbt = document.querySelector("#resetbutton");
let maxScore = document.querySelector("p span");


let winningScore = 5;
let gameover = false;

p1.addEventListener("click", () => {
    if(!gameover)
    {
        p1Score++;
        if(p1Score == winningScore)
        {
            gameover = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }    
});

p2.addEventListener("click", () => {
    if(!gameover)
    {
        p2Score++;
        if(p2Score == winningScore)
        {
            gameover = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }    
});

function reset()
{
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover = false;
}

resetbt.addEventListener("click", () => {
    reset();
});

inputnum.addEventListener("change", () => {
    maxScore.textContent = inputnum.value;
    winningScore = Number(inputnum.value);
    reset();
});





