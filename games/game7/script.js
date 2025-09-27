const board=document.getElementById("board");
let cells=Array(9).fill(null);
let turn="X";
const status=document.getElementById("status");

function checkWinner(){
  const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(let [a,b,c] of wins) if(cells[a]&&cells[a]===cells[b]&&cells[a]===cells[c]) return cells[a];
  return cells.includes(null)?null:"Draw";
}

cells.forEach((_,i)=>{
  let div=document.createElement("div");
  div.className="cell";
  div.onclick=()=>{
    if(cells[i]||checkWinner()) return;
    cells[i]=turn; div.textContent=turn;
    turn=turn==="X"?"O":"X";
    let win=checkWinner();
    if(win){status.textContent=win==="Draw"?"It's a draw!":win+" wins!";}
  };
  board.appendChild(div);
});
