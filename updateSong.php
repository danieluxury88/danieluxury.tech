<?php
$media = $_POST['media'];
$url = $_POST['url'];

$data_to_save = $media . "\n" . $url;

file_put_contents('now_playing.txt', $data_to_save);

?>