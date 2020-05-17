
var loadtime = 1000;

if(pn == 2){
  document.getElementById("rank2").style.display = "block";
}else if(pn == 3){
  document.getElementById("rank2").style.display = "block";
  document.getElementById("rank3").style.display = "block";
}else if(pn == 4){
  document.getElementById("rank2").style.display = "block";
  document.getElementById("rank3").style.display = "block";
  document.getElementById("rank4").style.display = "block";
}

/*
if(nxturnplayer == 1){
  document.getElementById("nxplIcon").classList.add('p1');
}else if(nxturnplayer == 2){
  document.getElementById("nxplIcon").classList.add('p2');
}else if(nxturnplayer == 3){
  document.getElementById("nxplIcon").classList.add('p3');
}else if(nxturnplayer == 4){
  document.getElementById("nxplIcon").classList.add('p4');
}
*/

if(nxpl != sessionpn){
  document.getElementById('nextTurn').onclick = "";
}

if(toGoal1 == 0 || toGoal2 == 0 || toGoal3 == 0 || toGoal4 == 0){
  document.getElementById("menu").style.display = "none";
  document.getElementById("goal").style.display = "block";
}

function setInputValueCS1(){
  document.getElementById("inputCS1").value = currentSpace1;
}
function setInputValueTG1(){
  document.getElementById("inputTG1").value = toGoal1;
}
function setInputValueDRC1(){
  document.getElementById("inputDRC1").value = diceRollCount1;
}

function setInputValueCS2(){
  document.getElementById("inputCS2").value = currentSpace2;
}
function setInputValueTG2(){
  document.getElementById("inputTG2").value = toGoal2;
}
function setInputValueDRC2(){
  document.getElementById("inputDRC2").value = diceRollCount2;
}

function setInputValueCS3(){
  document.getElementById("inputCS3").value = currentSpace3;
}
function setInputValueTG3(){
  document.getElementById("inputTG3").value = toGoal3;
}
function setInputValueDRC3(){
  document.getElementById("inputDRC3").value = diceRollCount3;
}

function setInputValueCS4(){
  document.getElementById("inputCS4").value = currentSpace4;
}
function setInputValueTG4(){
  document.getElementById("inputTG4").value = toGoal4;
}
function setInputValueDRC4(){
  document.getElementById("inputDRC4").value = diceRollCount4;
}

function setInputValueNextPlayer(){
  if(nxpl < pn){
    nxpl++;
    document.getElementById("nextPlayer").value = nxpl;
  }else if(nxpl == pn){
    document.getElementById("nextPlayer").value = 1;
  }
}

function submitresultform(){
  document.resultform.submit();
}

function turnChange(){
  setProgress(nxturnplayer);
  setTimeout(submitresultform,100);
}

function setInputValueResetGame(){
  document.getElementById("playerNum").value = 0;
  document.getElementById("nextPlayer").value = 1;
  document.getElementById("inputCS1").value = 0;
  document.getElementById("inputTG1").value = 100;
  document.getElementById("inputDRC1").value = 1;
  document.getElementById("inputCS2").value = 0;
  document.getElementById("inputTG2").value = 100;
  document.getElementById("inputDRC2").value = 1;
  document.getElementById("inputCS3").value = 0;
  document.getElementById("inputTG3").value = 100;
  document.getElementById("inputDRC3").value = 1;
  document.getElementById("inputCS4").value = 0;
  document.getElementById("inputTG4").value = 100;
  document.getElementById("inputDRC4").value = 1;
}

function returnMenu(){
  document.resultform.action = "index.php";
  submitresultform();
}

function resetGame(){
  document.resultform.action = "index.php";
  setInputValueResetGame();
  submitresultform();
}

function setProgress(pronum){
  var xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp1.open("POST", "xmlphp/setprogress.php", true);
  xhttp1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp1.send("progress=" + pronum);
}

function getProgress() {
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      progress = this.responseText;
      if(progress == 5){
        tim = setTimeout("getProgress()", loadtime);
      }else{
        document.location.href = "game.php";
      }
    }
  };
  xhttp.open("GET", "xmlphp/progress.php", true);
  xhttp.send();
}

setInputValueNextPlayer();
setInputValueCS1();
setInputValueTG1();
setInputValueDRC1();
setInputValueCS2();
setInputValueTG2();
setInputValueDRC2();
setInputValueCS3();
setInputValueTG3();
setInputValueDRC3();
setInputValueCS4();
setInputValueTG4();
setInputValueDRC4();
setTimeout(getProgress,2500);
