let number=Math.floor(Math.random()*100)+1;
function check(){
  let guess=parseInt(document.getElementById("guess").value);
  let res=document.getElementById("result");
  if(guess===number){res.textContent="🎉 Correct!";number=Math.floor(Math.random()*100)+1;}
  else if(guess<number) res.textContent="Too low!";
  else res.textContent="Too high!";
}
