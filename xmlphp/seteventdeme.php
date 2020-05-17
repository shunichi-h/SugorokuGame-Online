<?php
try {
  $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
  //print 'ゲームの進行状況を保存しました。';
} catch ( PDOException $e ) {
  print "接続エラー:{$e->getMessage()}";
}

$eventdeme = $_POST["eventdeme"];

$sqled = "UPDATE playernumber2 SET eventdeme = $eventdeme WHERE id = 1";
$res = $pdo->query($sqled);

?>
