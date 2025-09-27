const game=document.getElementById("game");
let symbols=["🍎","🍎","🍌","🍌","🍒","🍒","🍇","🍇"];
symbols.sort(()=>0.5-Math.random());
let flipped=[];
symbols.forEach(sym=>{
  let div=document.createElement("div");
  div.className="card";
  div.dataset.symbol=sym;
  div.onclick=()=>{
    if(div.textContent||flipped.length===2) return;
    div.textContent=sym;
    flipped.push(div);
    if(flipped.length===2){
      if(flipped[0].dataset.symbol===flipped[1].dataset.symbol){
        flipped.forEach(c=>c.classList.add("matched"));
      } else {
        setTimeout(()=>flipped.forEach(c=>c.textContent=""),800);
      }
      flipped=[];
    }
  };
  game.appendChild(div);
});
