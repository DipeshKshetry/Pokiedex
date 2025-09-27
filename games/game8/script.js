const game=document.getElementById("game");
let score=0;
let holes=[];

for(let i=0;i<9;i++){
  let div=document.createElement("div");
  div.className="hole";
  div.onclick=()=>{
    if(div.firstChild){score++;document.getElementById("score").textContent=score;div.innerHTML="";}
  };
  holes.push(div);
  game.appendChild(div);
}

function showMole(){
  holes.forEach(h=>h.innerHTML="");
  let hole=holes[Math.floor(Math.random()*9)];
  let mole=document.createElement("div");
  mole.className="mole";
  hole.appendChild(mole);
}
setInterval(showMole,1000);
