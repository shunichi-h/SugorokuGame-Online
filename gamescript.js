
//現在のマスのid
var currentSpaceId1 = ("g" + currentSpace1);
var currentSpaceId2 = ("g" + currentSpace2);
var currentSpaceId3 = ("g" + currentSpace3);
var currentSpaceId4 = ("g" + currentSpace4);
//ゴールまでのマス数

//サイコロを振って得た出目
var diceDeme;
//出目に応じて表示する図
var demeImage = "img/1.png";
//サイコロを振るのが何回目か

var child1;
var child2;
var child3;
var child4;

//コマが移動する数
var moveCount;

var element;

var count = 20;	//　点滅させる回数
var mSec = 50;	//　点滅速度（1秒＝1000）
var rollTime = count * mSec + 100;

var turnTime = 1000;

var eventNum;
var xhttp;
var loadtime = 1000;

var progress;


getdice6 = new Array(
"img/1.png",
"img/2.png",
"img/3.png",
"img/4.png",
"img/5.png",
"img/6.png");

function btnControl(){
  if(nxpl != sessionpn){
    document.getElementById('diceBtn').onclick = "";
    getProgress();
  }
}

//サイコロを振るアニメーション
function animate(){
  diceDeme = Math.floor(Math.random() * 6) + 1;
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  count--;
      if (count >=1 )  { tim = setTimeout("animate()",mSec);}
      if (count ==0 )  { count = 20 ;}
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

function submitgameform(){
  document.gameform.submit();
}

//コマを進める
function forward1(){
  child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 ++;
  currentSpaceId1 = ("g" + currentSpace1);
  setInputValueCS1();
  if(currentSpace1 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  }

  toGoal1 --;
  setInputValueTG1();
  if(toGoal1 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー１の勝利！";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-child p1"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
    document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-running p1"></i>');
  }
  document.getElementById('now1').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal1 > 0)  {
    tim = setTimeout("forward1()",500);
  }else if (document.getElementById(currentSpaceId1).classList.contains('event') == true){
    tim = setTimeout(events1,1000);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function forward2(){
  child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpace2 ++;
  currentSpaceId2 = ("g" + currentSpace2);
  setInputValueCS2();
  if(currentSpace2 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  }

  toGoal2 --;
  setInputValueTG2();
  if(toGoal2 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー２の勝利!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-child p2"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
    document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-running p2"></i>');
  }
  document.getElementById('now2').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal2 > 0)  {
    tim = setTimeout("forward2()",500);
  }else if (document.getElementById(currentSpaceId2).classList.contains('event') == true){
    tim = setTimeout(events2,1000);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function forward3(){
  child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 ++;
  currentSpaceId3 = ("g" + currentSpace3);
  setInputValueCS3();
  if(currentSpace3 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  }

  toGoal3 --;
  setInputValueTG3();
  if(toGoal3 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー３の勝利!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-child p3"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
    document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-running p3"></i>');
  }
  document.getElementById('now3').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal3 > 0)  {
    tim = setTimeout("forward3()",500);
  }else if (document.getElementById(currentSpaceId3).classList.contains('event') == true){
    tim = setTimeout(events3,1000);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function forward4(){
  child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 ++;
  currentSpaceId4 = ("g" + currentSpace4);
  setInputValueCS4();
  if(currentSpace4 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  }

  toGoal4 --;
  setInputValueTG4();
  if(toGoal4 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー４の勝利!";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-child p4"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
    document.getElementById(currentSpaceId4).insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-running p4"></i>');
  }
  document.getElementById('now4').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal4 > 0)  {
    tim = setTimeout("forward4()",500);
  }else if (document.getElementById(currentSpaceId4).classList.contains('event') == true){
    tim = setTimeout(events4,1000);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

//コマを戻す
function back1(){
  child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 --;
  currentSpaceId1 = ("g" + currentSpace1);
  setInputValueCS1();
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  toGoal1 ++;
  setInputValueTG1();
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-running p1"></i>');
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back1()",500);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function back2(){
  child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpace2 --;
  currentSpaceId2 = ("g" + currentSpace2);
  setInputValueCS2();
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  toGoal2 ++;
  setInputValueTG2();
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
  document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-running p2"></i>');
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back2()",500);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function back3(){
  child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 --;
  currentSpaceId3 = ("g" + currentSpace3);
  setInputValueCS3();
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  toGoal3 ++;
  setInputValueTG3();
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
  document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-running p3"></i>');
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back3()",500);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function back4(){
  child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 --;
  currentSpaceId4 = ("g" + currentSpace4);
  setInputValueCS4();
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  toGoal4 ++;
  setInputValueTG4();
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
  document.getElementById(currentSpaceId4).insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-running p4"></i>');
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back4()",500);
  }else{
    setProgress(5);
    tim = setTimeout(submitgameform,turnTime);
  }
}

function setEventdeme(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "xmlphp/seteventdeme.php", true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send("eventdeme=" + moveCount);
}

//進むイベント
function eventForward1() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward1();
}

function eventForward2() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward2();
}

function eventForward3() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward3();
}

function eventForward4() {
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
  forward4();
}

//戻るイベント
function eventBack1(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back1();
}

function eventBack2(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back2();
}

function eventBack3(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back3();
}

function eventBack4(){
  moveCount = Math.floor(Math.random() * 4) + 1;
  setEventdeme();
  document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
  back4();
}

function setEvent(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "xmlphp/setevent.php", true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send("eventNum=" + eventNum);
}


//イベントで進むor戻るを決定
function events1() {
  eventNum = Math.floor(Math.random() * 2) + 1;
  setEvent();
  if(eventNum === 1){
    eventForward1();
  }else if(eventNum === 2){
    eventBack1();
  }
}

//イベントで進むor戻るを決定
function events2() {
  eventNum = Math.floor(Math.random() * 2) + 1;
  setEvent();
  if(eventNum === 1){
    eventForward2();
  }else if(eventNum === 2){
    eventBack2();
  }
}

function events3() {
  eventNum = Math.floor(Math.random() * 2) + 1;
  setEvent();
  if(eventNum === 1){
    eventForward3();
  }else if(eventNum === 2){
    eventBack3();
  }
}

function events4() {
  eventNum = Math.floor(Math.random() * 2) + 1;
  setEvent();
  if(eventNum === 1){
    eventForward4();
  }else if(eventNum === 2){
    eventBack4();
  }
}

function setDicedeme(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xhttp.open("POST", "xmlphp/setdicedeme.php", true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send("dicedeme=" + diceDeme);
}

//サイコロを振った時に実行する
function rollDiceAction1() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  setDicedeme();
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount1+"投目";
  diceRollCount1 ++;
  setInputValueDRC1();

  moveCount = diceDeme;
  forward1();
}

function rollDiceAction2() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  setDicedeme();
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount2+"投目";
  diceRollCount2 ++;
  setInputValueDRC2();

  moveCount = diceDeme;
  forward2();
}

function rollDiceAction3() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  setDicedeme();
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount3+"投目";
  diceRollCount3 ++;
  setInputValueDRC3();

  moveCount = diceDeme;
  forward3();
}

function rollDiceAction4() {
  //出目に「1〜6からランダムに取得した値を代入
  diceDeme = Math.floor(Math.random() * 6) + 1;
  setDicedeme();
  document.imgdice1.src =  getdice6[(diceDeme-1)];
  //取得した出目を、idにdiceDemeがあるHTML要素に送る
  document.getElementById('diceDeme').innerHTML = diceDeme;

  document.getElementById('diceRollCount').innerHTML = diceRollCount4+"投目";
  diceRollCount4 ++;
  setInputValueDRC4();

  moveCount = diceDeme;
  forward4();
}

function rollDice1(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  setTimeout(rollDiceAction1,rollTime);
}

function rollDice2(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  setTimeout(rollDiceAction2,rollTime);
}

function rollDice3(){
  document.getElementById('diceBtn').onclick = "";
  animate();
  setTimeout(rollDiceAction3,rollTime);
}

function rollDice4(){
  animate();
  setTimeout(rollDiceAction4,rollTime);
}



//他プレイヤーのターンでの処理
function turnToResult(){
  document.location.href = "result.php";
}

function forward1Auto(){
  child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 ++;
  currentSpaceId1 = ("g" + currentSpace1);
  if(currentSpace1 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  }

  toGoal1 --;
  if(toGoal1 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー１の勝利！";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-child p1"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
    document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-running p1"></i>');
  }
  document.getElementById('now1').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal1 > 0)  {
    tim = setTimeout("forward1Auto()",500);
  }else if (document.getElementById(currentSpaceId1).classList.contains('event') == true){
    tim = setTimeout(events1Auto,1000);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function forward2Auto(){
  child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpace2 ++;
  currentSpaceId2 = ("g" + currentSpace2);
  if(currentSpace2 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  }

  toGoal2 --;
  if(toGoal2 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー２の勝利！";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-child p2"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
    document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-running p2"></i>');
  }
  document.getElementById('now2').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal2 > 0)  {
    tim = setTimeout("forward2Auto()",500);
  }else if (document.getElementById(currentSpaceId2).classList.contains('event') == true){
    tim = setTimeout(events2Auto,1000);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function forward3Auto(){
  child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 ++;
  currentSpaceId3 = ("g" + currentSpace3);
  if(currentSpace3 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  }

  toGoal3 --;
  if(toGoal3 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー３の勝利！";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-child p3"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
    document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-running p3"></i>');
  }
  document.getElementById('now3').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal3 > 0)  {
    tim = setTimeout("forward3Auto()",500);
  }else if (document.getElementById(currentSpaceId3).classList.contains('event') == true){
    tim = setTimeout(events3Auto,1000);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function forward4Auto(){
  child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 ++;
  currentSpaceId4 = ("g" + currentSpace4);
  if(currentSpace4 >= 100){
    document.getElementById('currentSpace').innerHTML = "ゴールしました!";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  }

  toGoal4 --;
  if(toGoal4 <= 0){
    document.getElementById('toGoal').innerHTML = "プレイヤー４の勝利！";
    document.getElementById('diceBtn').onclick = "";
    document.getElementById('g100').insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-child p4"></i>');
  }else{
    document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
    document.getElementById(currentSpaceId4).insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-running p4"></i>');
  }
  document.getElementById('now4').scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 && toGoal4 > 0)  {
    tim = setTimeout("forward4Auto()",500);
  }else if (document.getElementById(currentSpaceId4).classList.contains('event') == true){
    tim = setTimeout(events4Auto,1000);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function back1Auto(){
  child1 = document.getElementById('now1');
  document.getElementById(currentSpaceId1).removeChild(child1);
  currentSpace1 --;
  currentSpaceId1 = ("g" + currentSpace1);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  toGoal1 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-running p1"></i>');
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back1Auto()",500);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function back2Auto(){
  child2 = document.getElementById('now2');
  document.getElementById(currentSpaceId2).removeChild(child2);
  currentSpaceId2 --;
  currentSpaceId2 = ("g" + currentSpace2);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  toGoal2 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";
  document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-running p2"></i>');
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back2Auto()",500);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function back3Auto(){
  child3 = document.getElementById('now3');
  document.getElementById(currentSpaceId3).removeChild(child3);
  currentSpace3 --;
  currentSpaceId3 = ("g" + currentSpace3);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  toGoal3 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";
  document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-running p3"></i>');
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back3Auto()",500);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function back4Auto(){
  child4 = document.getElementById('now4');
  document.getElementById(currentSpaceId4).removeChild(child4);
  currentSpace4 --;
  currentSpaceId4 = ("g" + currentSpace4);
  document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  toGoal4 ++;
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";
  document.getElementById(currentSpaceId4).insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-running p4"></i>');
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  moveCount--;
  if (moveCount >=1 ) {
     tim = setTimeout("back4Auto()",500);
  }else{
    tim = setTimeout(turnToResult,turnTime);
  }
}

function getEventdeme(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      moveCount = this.responseText;
    }
  };
  xhttp.open("GET", "xmlphp/geteventdeme.php", true);
  xhttp.send();
}

function getEventNum(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      eventNum = this.responseText;
    }
  };
  xhttp.open("GET", "xmlphp/getevent.php", true);
  xhttp.send();
}

function eventForward1Auto() {
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
    forward1Auto();
  },100);
}

function eventForward2Auto() {
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
    forward2Auto();
  },100);
}

function eventForward3Auto() {
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
    forward3Auto();
  },100);
}

function eventForward4Auto() {
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "あたりマス！"+moveCount+"マス進む";
    forward4Auto();
  },100);
}

function eventBack1Auto(){
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
    back1Auto();
  },100);
}

function eventBack2Auto(){
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
    back2Auto();
  },100);
}

function eventBack3Auto(){
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
    back3Auto();
  },100);
}

function eventBack4Auto(){
  getEventdeme();
  setTimeout(function(){
    document.getElementById('diceRollCount').innerHTML = "はずれマス！"+moveCount+"マス戻る";
    back4Auto();
  },100);
}

function events1Auto() {
  getEventNum();
  setTimeout(function(){
    if(eventNum == 1){
      eventForward1Auto();
    }else if(eventNum == 2){
      eventBack1Auto();
    }
  },100);
}

function events2Auto() {
  getEventNum();
  setTimeout(function(){
    if(eventNum == 1){
      eventForward2Auto();
    }else if(eventNum == 2){
      eventBack2Auto();
    }
  },100);
}

function events3Auto() {
  getEventNum();
  setTimeout(function(){
    if(eventNum == 1){
      eventForward3Auto();
    }else if(eventNum == 2){
      eventBack3Auto();
    }
  },100);
}

function events4Auto() {
  getEventNum();
  setTimeout(function(){
    if(eventNum == 1){
      eventForward4Auto();
    }else if(eventNum == 2){
      eventBack4Auto();
    }
  },100);
}

function getDicedeme(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      diceDeme = this.responseText;
    }
  };
  xhttp.open("GET", "xmlphp/getdicedeme.php", true);
  xhttp.send();
}

function rollDiceAction1Auto() {
  //出目に「1〜6からランダムに取得した値を代入
  getDicedeme();
  setTimeout(function(){
    document.imgdice1.src =  getdice6[(diceDeme-1)];
    //取得した出目を、idにdiceDemeがあるHTML要素に送る
    document.getElementById('diceDeme').innerHTML = diceDeme;

    document.getElementById('diceRollCount').innerHTML = diceRollCount1+"投目";

    moveCount = diceDeme;
    forward1Auto();
  },100);
}

function rollDiceAction2Auto() {
  //出目に「1〜6からランダムに取得した値を代入
  getDicedeme();
  setTimeout(function(){
    document.imgdice1.src =  getdice6[(diceDeme-1)];
    //取得した出目を、idにdiceDemeがあるHTML要素に送る
    document.getElementById('diceDeme').innerHTML = diceDeme;

    document.getElementById('diceRollCount').innerHTML = diceRollCount2+"投目";

    moveCount = diceDeme;
    forward2Auto();
  },100);
}

function rollDiceAction3Auto() {
  //出目に「1〜6からランダムに取得した値を代入
  getDicedeme();
  setTimeout(function(){
    document.imgdice1.src =  getdice6[(diceDeme-1)];
    //取得した出目を、idにdiceDemeがあるHTML要素に送る
    document.getElementById('diceDeme').innerHTML = diceDeme;

    document.getElementById('diceRollCount').innerHTML = diceRollCount3+"投目";

    moveCount = diceDeme;
    forward3Auto();
  },100);
}

function rollDiceAction4Auto() {
  //出目に「1〜6からランダムに取得した値を代入
  getDicedeme();
  setTimeout(function(){
    document.imgdice1.src =  getdice6[(diceDeme-1)];
    //取得した出目を、idにdiceDemeがあるHTML要素に送る
    document.getElementById('diceDeme').innerHTML = diceDeme;

    document.getElementById('diceRollCount').innerHTML = diceRollCount4+"投目";

    moveCount = diceDeme;
    forward4Auto();
  },100);
}

function rollDice1Auto(){
  animate();
  setTimeout(rollDiceAction1Auto,rollTime);
}

function rollDice2Auto(){
  animate();
  setTimeout(rollDiceAction2Auto,rollTime);
}

function rollDice3Auto(){
  animate();
  setTimeout(rollDiceAction3Auto,rollTime);
}

function rollDice4Auto(){
  animate();
  setTimeout(rollDiceAction4Auto,rollTime);
}



function onePlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice1;
  element = document.getElementById('now1');
  element.scrollIntoView({behavior: 'instant', block: 'center'});
  document.getElementById('playerTurn').innerHTML = pname1 + "のターン";
  if(currentSpace1 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace1+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount1+"投目";
  setInputValueDRC1();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal1+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ff3333";
}

function twoPlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice2;
  element = document.getElementById('now2');
  element.scrollIntoView({behavior: 'instant', block: 'center'});
  document.getElementById('playerTurn').innerHTML = pname2 + "のターン";
  if(currentSpace2 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace2+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount2+"投目";
  setInputValueDRC2();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal2+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#3333ff";
}

function threePlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice3;
  element = document.getElementById('now3');
  element.scrollIntoView({behavior: 'instant', block: 'center'});
  document.getElementById('playerTurn').innerHTML = pname3 + "のターン";
  if(currentSpace3 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace3+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount3+"投目";
  setInputValueDRC3();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal3+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#ffff33";
}

function fourPlayerAction(){
  document.getElementById('diceBtn').onclick = rollDice4;
  element = document.getElementById('now4');
  element.scrollIntoView({behavior: 'instant', block: 'center'});
  document.getElementById('playerTurn').innerHTML = pname4 + "のターン";
  if(currentSpace4 == 0){
    document.getElementById('currentSpace').innerHTML = "現在：スタート";
  }else{
    document.getElementById('currentSpace').innerHTML = "現在："+currentSpace4+"マス目";
  }
  document.getElementById('diceRollCount').innerHTML = diceRollCount4+"投目";
  setInputValueDRC4();
  document.getElementById('diceDeme').innerHTML = "";
  document.getElementById('toGoal').innerHTML = "ゴールまで"+toGoal4+"マス";

  document.getElementById('diceBtn').style.backgroundColor ="#00cc00";
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
        if(nxpl == 1){
          setTimeout(rollDice1Auto, loadtime);
        }else if(nxpl == 2){
          setTimeout(rollDice2Auto, loadtime);
        }else if(nxpl == 3){
          setTimeout(rollDice3Auto, loadtime);
        }else if(nxpl == 4){
          setTimeout(rollDice4Auto, loadtime);
        }
      }else{
        tim = setTimeout("getProgress()", loadtime);
      }
    }
  };
  xhttp.open("GET", "xmlphp/progress.php", true);
  xhttp.send();
}

if(pn == 1){
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-male p1"></i>');
}else if(pn == 2){
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-male p1"></i>');
  document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-male p2"></i>');
}else if(pn == 3){
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-male p1"></i>');
  document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-male p2"></i>');
  document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-male p3"></i>');
}else if(pn == 4){
  document.getElementById(currentSpaceId1).insertAdjacentHTML('beforeend','<i id="now1" class="fas fa-male p1"></i>');
  document.getElementById(currentSpaceId2).insertAdjacentHTML('beforeend','<i id="now2" class="fas fa-male p2"></i>');
  document.getElementById(currentSpaceId3).insertAdjacentHTML('beforeend','<i id="now3" class="fas fa-male p3"></i>');
  document.getElementById(currentSpaceId4).insertAdjacentHTML('beforeend','<i id="now4" class="fas fa-male p4"></i>');
}

if(nxpl == 1){
  onePlayerAction();
  btnControl();
}else if(nxpl == 2){
  twoPlayerAction();
  btnControl();
}else if(nxpl == 3){
  threePlayerAction();
  btnControl();
}else if(nxpl == 4){
  fourPlayerAction();
  btnControl();
}

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
