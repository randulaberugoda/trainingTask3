<?php
echo "<h2>Port Test Results</h2>";

$host = 'sandbox.smtp.mailtrap.io';
$ports = [25, 465, 587, 2525];

foreach ($ports as $port) {
    $connection = @fsockopen($host, $port, $errno, $errstr, 5);
    if ($connection) {
        fclose($connection);
        echo "<p style='color:green'>✅ Port $port — OPEN and reachable</p>";
    } else {
        echo "<p style='color:red'>❌ Port $port — BLOCKED ($errstr)</p>";
    }
}
?>