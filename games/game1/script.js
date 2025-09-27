let score=0;
const box=document.getElementById("box");
const scoreDisplay=document.getElementById("score");
const gameArea=document.getElementById("game-area");

function moveBox(){
  let maxX=gameArea.clientWidth-box.offsetWidth;
  let maxY=gameArea.clientHeight-box.offsetHeight;
  box.style.left=Math.random()*maxX+"px";
  box.style.top=Math.random()*maxY+"px";
}

box.onclick=()=>{
  score++;
  scoreDisplay.textContent=score;
  moveBox();
};

setInterval(moveBox,1500);
moveBox();
