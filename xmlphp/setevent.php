<?php
try {
  $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
  //print 'ゲームの進行状況を保存しました。';
} catch ( PDOException $e ) {
  print "接続エラー:{$e->getMessage()}";
}

$eventNum = $_POST["eventNum"];

$sqlev = "UPDATE playernumber2 SET event = $eventNum WHERE id = 1";
$res = $pdo->query($sqlev);

?>
