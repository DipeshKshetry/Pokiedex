function play(choice){
  const options=["rock","paper","scissors"];
  let comp=options[Math.floor(Math.random()*3)];
  let result="";
  if(choice===comp) result="Draw! Both chose "+comp;
  else if(
    (choice==="rock"&&comp==="scissors")||
    (choice==="paper"&&comp==="rock")||
    (choice==="scissors"&&comp==="paper")
  ) result="You Win! "+choice+" beats "+comp;
  else result="You Lose! "+comp+" beats "+choice;
  document.getElementById("result").textContent=result;
}
