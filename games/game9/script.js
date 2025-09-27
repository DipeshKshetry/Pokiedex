let words=["apple","banana","cherry","grape","orange"];
let word="",score=0;
const wordEl=document.getElementById("word");
const input=document.getElementById("input");
const scoreEl=document.getElementById("score");

function newWord(){
  word=words[Math.floor(Math.random()*words.length)];
  wordEl.textContent=word;
  input.value="";
}
input.addEventListener("input",()=>{
  if(input.value===word){score++;scoreEl.textContent=score;newWord();}
});
newWord();
