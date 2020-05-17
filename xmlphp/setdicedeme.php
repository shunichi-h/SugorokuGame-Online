<?php
try {
  $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
  //print 'ゲームの進行状況を保存しました。';
} catch ( PDOException $e ) {
  print "接続エラー:{$e->getMessage()}";
}

$dicedeme = $_POST["dicedeme"];

$sqldd = "UPDATE playernumber2 SET dicedeme = $dicedeme WHERE id = 1";
$res = $pdo->query($sqldd);

?>
