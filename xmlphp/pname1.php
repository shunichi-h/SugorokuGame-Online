<?php
try {
  $pdo = new PDO ( 'mysql:host=localhost;dbname=SUGOROKU_DB;charset=utf8','shunichi', 'shun0505');
  //print 'ゲームの進行状況を保存しました。';
} catch ( PDOException $e ) {
  print "接続エラー:{$e->getMessage()}";
}

foreach ($pdo->query('select playerName from playername where playerNumber = 1') as $row) {
  $pn1 = "$row[playerName]";
}

echo $pn1;

?>
