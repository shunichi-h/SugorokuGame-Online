<?php
try {
  $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
  //print 'ゲームの進行状況を保存しました。';
} catch ( PDOException $e ) {
  print "接続エラー:{$e->getMessage()}";
}

$sqlp1n = "UPDATE playername SET playerName = '-' WHERE playerNumber = 1";
$res = $pdo->query($sqlp1n);

$sqlp2n = "UPDATE playername SET playerName = '-' WHERE playerNumber = 2";
$res = $pdo->query($sqlp2n);

$sqlp3n = "UPDATE playername SET playerName = '-' WHERE playerNumber = 3";
$res = $pdo->query($sqlp3n);

$sqlp4n = "UPDATE playername SET playerName = '-' WHERE playerNumber = 4";
$res = $pdo->query($sqlp4n);

foreach ($pdo->query('select playerName from playername where playerNumber = 1') as $row) {
  $pnall = "$row[playerName]";
}

echo $pnall;

?>
