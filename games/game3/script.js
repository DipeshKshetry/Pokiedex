const player=document.getElementById("player");
const enemies=document.querySelectorAll(".enemy");
const timeDisplay=document.getElementById("time");
let start=Date.now();

document.addEventListener("keydown", e=>{
  let x=player.offsetLeft, y=player.offsetTop;
  if(e.key==="ArrowLeft") x-=10;
  if(e.key==="ArrowRight") x+=10;
  if(e.key==="ArrowUp") y-=10;
  if(e.key==="ArrowDown") y+=10;
  x=Math.max(0,Math.min(570,x));
  y=Math.max(0,Math.min(370,y));
  player.style.left=x+"px";
  player.style.top=y+"px";
});

function moveEnemies(){
  enemies.forEach(enemy=>{
    if(enemy.style.left==="") enemy.style.left=Math.random()*570+"px";
    let y=enemy.offsetTop+3;
    if(y>400){ y=0; enemy.style.left=Math.random()*570+"px"; }
    enemy.style.top=y+"px";

    if(player.offsetLeft<enemy.offsetLeft+30 &&
       player.offsetLeft+30>enemy.offsetLeft &&
       player.offsetTop<enemy.offsetTop+30 &&
       player.offsetTop+30>enemy.offsetTop){
        alert("Game Over! You survived "+((Date.now()-start)/1000).toFixed(1)+" sec");
        start=Date.now(); timeDisplay.textContent=0;
    }
  });
  timeDisplay.textContent=((Date.now()-start)/1000).toFixed(1);
  requestAnimationFrame(moveEnemies);
}
moveEnemies();
