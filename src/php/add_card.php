<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$author = mysqli_real_escape_string($conn, $data['author']);
$content = mysqli_real_escape_string($conn, $data['content']);
$yes = $data['yes'];
$no = $data['no'];

$sql = "INSERT INTO cards (author, content, yes, no) VALUES ('$author', '$content', $yes, $no)";

if ($conn->query($sql) === TRUE) {
    $data['id'] = $conn->insert_id;
    header('Content-Type: application/json'); // indique que la réponse est en JSON
    echo json_encode($data);
} else {
    header('Content-Type: application/json'); // indique que la réponse est en JSON
    echo json_encode(['error' => 'Error adding card to database']);
}

$conn->close();
?>
