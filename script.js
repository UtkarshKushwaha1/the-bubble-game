function makeBubble (){
    var clutter = ""

for(var i=1;i<=140;i++){
    var rn = Math.floor(Math.random()*10);
   clutter +=` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var hitr =0;

function getNewHit(){
    hitr = Math.floor(Math.random()*10);
    document.querySelector("#hitVar").textContent = hitr;
}


function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
        
    },1000);
}

function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dest){
    var clickedNumber = Number(dest.target.textContent);
    if(clickedNumber === hitr){
        increaseScore();
        getNewHit();
        makeBubble();
    }

    else
    {
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Clicked wrong number.</h1>`;
    }
})

getNewHit();
runTimer();
makeBubble();
