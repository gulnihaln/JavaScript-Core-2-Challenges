function startGame() {
  game = false;
  if(sCount > lCount){
    console.log (`The winner is S key player`);
  }else if( lCount > sCount){
    console.log (`The winner is L key player`);
  }else {
    console.log (`Everybody wins`);
  }
}
var game = false;

let sCount = 0;
let lCount = 0;
const sCountNumber = document.getElementById('s-countNumber');
const lCountNumber = document.getElementById("l-countNumber");

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    sCount++;
    sCountNumber.innerText = sCount;
  } else if (e.keyCode === 76) {
    lCount++;
    lCountNumber.innerText = lCount;
  }
  console.log(sCount+lCount)
}
 
// setTimeout();
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', takeDataFromInput);

function takeDataFromInput (){
  // game = true;
  const timer = document.getElementById('timer').value * 1000;
  if (game === true){
    document.addEventListener("keypress", keyBoardEvents);
  }
  sCount = 0;
  sCountNumber.innerText = sCount;
  lCount= 0;
  lCountNumber.innerText = lCount;
  setTimeout(startGame, timer)
}


