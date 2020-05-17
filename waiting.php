<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SUGOROKU GAME</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="waiting-stylesheet.css?1">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">
  </script>
</head>
<body>

  <?php
    session_start();

    try {
      $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
      //print 'ゲームの進行状況を保存しました。';
    } catch ( PDOException $e ) {
      print "接続エラー:{$e->getMessage()}";
    }

    if(isset($_POST["progress"])){
      $progress = $_POST["progress"];
      $sqlpr = "UPDATE playernumber2 SET progress = $progress WHERE id = 1";
      $res = $pdo->query($sqlpr);
    }

    foreach ($pdo->query('select playerName from playername where playerNumber = 1') as $row) {
    $pname1 = "$row[playerName]";
    }

    foreach ($pdo->query('select playerName from playername where playerNumber = 2') as $row) {
    $pname2 = "$row[playerName]";
    }

    foreach ($pdo->query('select playerName from playername where playerNumber = 3') as $row) {
    $pname3 = "$row[playerName]";
    }

    foreach ($pdo->query('select playerName from playername where playerNumber = 4') as $row) {
    $pname4 = "$row[playerName]";
    }

    if(isset($_POST["plnm"])){
      $pn = $_POST["plnm"];
      $sqlpn = "UPDATE playernumber2 SET playernum = $pn WHERE id = 1";
      $res = $pdo->query($sqlpn);
    }else{
      foreach ($pdo->query('select playernum from playernumber2') as $row) {
        $pn = "$row[playernum]";
      }
    }

    if(isset($_POST["p1name"])){
      $p1name = $_POST["p1name"];
      $sqlp1n = "UPDATE playername SET playerName = '$p1name' WHERE playerNumber = 1";
      $res = $pdo->query($sqlp1n);
      $_SESSION['playerNumber'] = 1;
      $_SESSION['playerName'] = $p1name;
    }else if(isset($_POST["p2name"])){
      $p2name = $_POST["p2name"];
      $sqlp2n = "UPDATE playername SET playerName = '$p2name' WHERE playerNumber = 2";
      $res = $pdo->query($sqlp2n);
      $_SESSION['playerNumber'] = 2;
      $_SESSION['playerName'] = $p2name;
    }else if(isset($_POST["p3name"])){
      $p3name = $_POST["p3name"];
      $sqlp3n = "UPDATE playername SET playerName = '$p3name' WHERE playerNumber = 3";
      $res = $pdo->query($sqlp3n);
      $_SESSION['playerNumber'] = 3;
      $_SESSION['playerName'] = $p3name;
    }else if(isset($_POST["p4name"])){
      $p4name = $_POST["p4name"];
      $sqlp4n = "UPDATE playername SET playerName = '$p4name' WHERE playerNumber = 4";
      $res = $pdo->query($sqlp4n);
      $_SESSION['playerNumber'] = 4;
      $_SESSION['playerName'] = $p4name;
    }

    foreach ($pdo->query('select playernum from playernumber2') as $row) {
      $pn = "$row[playernum]";
    }


  ?>

  <script type="text/javascript">
    var pn = '<?php echo $pn; ?>';


    var pname1 = '<?php echo $pname1; ?>';
    var pname2 = '<?php echo $pname2; ?>';
    var pname3 = '<?php echo $pname3; ?>';
    var pname4 = '<?php echo $pname4; ?>';

  </script>

  <?php $pdo = null; ?>


  <div class="sugoroku-wrapper">
    <div class="container">
			<div class="title">
				<h1>すごろくゲーム〈オンラインでプレイ〉</h1>
			</div>

      <div class="menu" id="menu">
        <p><?php echo $_SESSION['playerName']; ?>さん、あなたはプレイヤー<?php echo $_SESSION['playerNumber']; ?>です</p>
        <p class="menu-text">待機中のプレイヤー</p>
        <p id="protest"></p>
        <div id="reset" class="choice-box-r choice-box-n" onclick="startGame()">
          <p class="choice choice-text-r"><i id="pntest" class="xml"></i>人でゲームスタート</p>
        </div>
        <div class="choice-box">
          <p class="choice choice-text">プレイヤー１：<i id="pname1" class="xml"></i></p>
          <p class="choice choice-icon"><i class="fas fa-male p1"></i></p>
        </div>
        <div class="choice-box">
          <p class="choice choice-text">プレイヤー２：<i id="pname2" class="xml"></i></p>
          <p class="choice choice-icon"><i class="fas fa-male p2"></i></p>
        </div>
        <div class="choice-box">
          <p class="choice choice-text">プレイヤー３：<i id="pname3" class="xml"></i></p>
          <p class="choice choice-icon"><i class="fas fa-male p3"></i></p>
        </div>
        <div class="choice-box">
          <p class="choice choice-text">プレイヤー４：<i id="pname4" class="xml"></i></p>
          <p class="choice choice-icon"><i class="fas fa-male p4"></i></p>
        </div>
      </div>

			<div class="clear"></div>

      <div class="game-form">
        <p>フォーム（最終的に隠す）</p>
        <form name="gameform" action = "game.php" method = "post">

          <p>playerNum</p> <input id="playerNum" type = "text" name ="plnm"><br/>
          <p>nextPlayer</p> <input id="nextPlayer" type = "text" name ="nxpl"><br/>

          <p>currentSpace1</p> <input id="inputCS1" type = "text" name ="cs1"><br/>
          <p>toGoal1</p> <input id="inputTG1" type = "text" name ="tg1"><br/>
          <p>dicerollcount1</p> <input id="inputDRC1" type = "text" name ="drc1"><br/>

          <p>currentSpace2</p> <input id="inputCS2" type = "text" name ="cs2"><br/>
          <p>toGoal2</p> <input id="inputTG2" type = "text" name ="tg2"><br/>
          <p>dicerollcount2</p> <input id="inputDRC2" type = "text" name ="drc2"><br/>

          <p>currentSpace3</p> <input id="inputCS3" type = "text" name ="cs3"><br/>
          <p>toGoal3</p> <input id="inputTG3" type = "text" name ="tg3"><br/>
          <p>dicerollcount3</p> <input id="inputDRC3" type = "text" name ="drc3"><br/>

          <p>currentSpace4</p> <input id="inputCS4" type = "text" name ="cs4"><br/>
          <p>toGoal4</p> <input id="inputTG4" type = "text" name ="tg4"><br/>
          <p>dicerollcount4</p> <input id="inputDRC4" type = "text" name ="drc4"><br/>
          <p>progress</p> <input id="progress" type = "text" name ="progress"><br/>
          <input type="submit" value="送信する">
        </form>




      </div>

    </div>
  </div>


  <script src="waiting-script.js?123456">
  </script>

</body>
</html>
