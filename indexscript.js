
var loadtime = 1000;

function checkPlayerNumber(){
  if(pname1 == "-"){
    document.getElementById("pnameform").name = "p1name";
    document.getElementById("playerNum").value = 1;
  }else if(pname2 == "-"){
    document.getElementById("pnameform").name = "p2name";
    document.getElementById("playerNum").value = 2;
  }else if(pname3 == "-"){
    document.getElementById("pnameform").name = "p3name";
    document.getElementById("playerNum").value = 3;
  }else if(pname4 == "-"){
    document.getElementById("pnameform").name = "p4name";
    document.getElementById("playerNum").value = 4;
  }
  tim = setTimeout((checkPlayerNumber, loadtime);
}

checkPlayerNumber();

function pnsubmit(){
  document.playernameform.submit();
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
  tim = setTimeout("loadXMLDoc2()", loadtime);
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

loadXMLDoc1();
loadXMLDoc2();
loadXMLDoc3();
loadXMLDoc4();

document.getElementById("progress").value = 0;

function resetPlayer(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("pname1").innerHTML = this.responseText;
      document.getElementById("pname2").innerHTML = this.responseText;
      document.getElementById("pname3").innerHTML = this.responseText;
      document.getElementById("pname4").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "xmlphp/resetplayer.php", true);
  xhttp.send();
  setTimeout(function(){
    document.location.href = "index.php";
  },100);
}
