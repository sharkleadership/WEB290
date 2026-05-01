<?php  // login.php
$host = 'localhost';
$user = 'qcczxjxq_HowIsTheBestCaseScenarioJoe';  // replace with your username removing <username>
$pass = 'MyFellowAmericans1!';  // replace with your password removing <password>
$data = 'qcczxjxq_vote';
$chrs = 'utf8mb4';
$attr = "mysql:host=$host;dbname=$data;charset=$chrs";
$opts = [
     PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
     PDO::ATTR_EMULATE_PREPARES => false,
];
?>