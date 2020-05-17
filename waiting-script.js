
var loadtime = 2000;

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pntest").innerHTML =
      this.responseText;
      document.getElementById("playerNum").value =
      this.responseText;
    }
  };
  xhttp.open("GET", "xmlphp/playernumber.php", true);
  xhttp.send();
  tim = setTimeout("loadXMLDoc()", loadtime);
}

function loadXMLDoc1() {
  var xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pname1").innerHTML =
      this.responseText;
    }
  };
  xhttp1.open("GET", "xmlphp/pname1.php", true);
  xhttp1.send();
  tim = setTimeout("loadXMLDoc1()", loadtime);
}

function loadXMLDoc2() {
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pname2").innerHTML =
      this.responseText;
    }
  };
  xhttp2.open("GET", "xmlphp/pname2.php", true);
  xhttp2.send();
  tim = setTimeout("loadXMLDoc2()", 5000);
}

function loadXMLDoc3() {
  var xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pname3").innerHTML =
      this.responseText;
    }
  };
  xhttp3.open("GET", "xmlphp/pname3.php", true);
  xhttp3.send();
  tim = setTimeout("loadXMLDoc3()", loadtime);
}

function loadXMLDoc4() {
  var xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pname4").innerHTML =
      this.responseText;
    }
  };
  xhttp4.open("GET", "xmlphp/pname4.php", true);
  xhttp4.send();
  tim = setTimeout("loadXMLDoc4()", loadtime);
}

function loadXMLDocProgress() {
  var xhttpPro = new XMLHttpRequest();
  xhttpPro.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var progress =
      this.responseText;
      if(progress == 1){
        document.location.href = "game.php";
      }
    }
  };
  xhttpPro.open("GET", "xmlphp/progress.php", true);
  xhttpPro.send();
  tim = setTimeout("loadXMLDocProgress()", loadtime);
}

function setInputValueReset(){
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


function startGame(){
  setInputValueReset();
  document.gameform.submit();
}

loadXMLDoc();
loadXMLDoc1();
loadXMLDoc2();
loadXMLDoc3();
loadXMLDoc4();
loadXMLDocProgress();
document.getElementById("progress").value = 1;
