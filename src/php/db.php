<?php
$servername = "localhost";
$username = "yoann";
$password = "helloworld";
$dbname = "Message";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
