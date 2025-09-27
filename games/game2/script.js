let score=0;
const paddle=document.getElementById("paddle");
const ball=document.getElementById("ball");
const scoreDisplay=document.getElementById("score");
let gameArea=document.getElementById("game-area");
let dx=0, dy=2;

document.addEventListener("mousemove", e=>{
  let rect=gameArea.getBoundingClientRect();
  let x=e.clientX-rect.left-50;
  paddle.style.left=Math.max(0,Math.min(500,x))+"px";
});

function gameLoop(){
  let x=ball.offsetLeft+dx;
  let y=ball.offsetTop+dy;
  if(x<=0||x>=580) dx*=-1;
  if(y<=0) dy*=-1;
  if(y>=380){
    if(ball.offsetLeft+10>paddle.offsetLeft && ball.offsetLeft<paddle.offsetLeft+100){
      dy*=-1; score++; scoreDisplay.textContent=score;
    } else {
      alert("Game Over! Score: "+score);
      score=0; scoreDisplay.textContent=0;
    }
  }
  ball.style.left=x+"px";
  ball.style.top=y+"px";
  requestAnimationFrame(gameLoop);
}
gameLoop();
