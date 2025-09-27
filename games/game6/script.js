const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
let box=20;
let snake=[{x:9*box,y:10*box}];
let food={x:Math.floor(Math.random()*20)*box,y:Math.floor(Math.random()*20)*box};
let dir,score=0;

document.addEventListener("keydown",e=>{
  if(e.key==="ArrowLeft"&&dir!=="RIGHT") dir="LEFT";
  if(e.key==="ArrowUp"&&dir!=="DOWN") dir="UP";
  if(e.key==="ArrowRight"&&dir!=="LEFT") dir="RIGHT";
  if(e.key==="ArrowDown"&&dir!=="UP") dir="DOWN";
});

function draw(){
  ctx.fillStyle="#333"; ctx.fillRect(0,0,400,400);
  snake.forEach(s=>{ctx.fillStyle="lime"; ctx.fillRect(s.x,s.y,box,box);});
  ctx.fillStyle="red"; ctx.fillRect(food.x,food.y,box,box);
  let head={x:snake[0].x,y:snake[0].y};
  if(dir==="LEFT") head.x-=box;
  if(dir==="UP") head.y-=box;
  if(dir==="RIGHT") head.x+=box;
  if(dir==="DOWN") head.y+=box;
  if(head.x===food.x&&head.y===food.y){score++;document.getElementById("score").textContent=score;food={x:Math.floor(Math.random()*20)*box,y:Math.floor(Math.random()*20)*box};}
  else snake.pop();
  if(head.x<0||head.x>=400||head.y<0||head.y>=400||snake.some(s=>s.x===head.x&&s.y===head.y)){alert("Game Over! Score:"+score);snake=[{x:9*box,y:10*box}];score=0;}
  snake.unshift(head);
}
setInterval(draw,100);
