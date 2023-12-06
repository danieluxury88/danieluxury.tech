<?php
// Example PHP server-side script to call OpenAI API

$apiKey = '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'; // Replace with your actual API key

// API URL and headers
$url = 'https://api.openai.com/v1/chat/completions';
$headers = [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
];

// Data payload
$data = [
    'messages' => [
        ['role' => 'user', 'content' => 'answer directly with a Christmas joke']
    ],
    'model' => 'gpt-3.5-turbo',
];

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute cURL session and close it
$response = curl_exec($ch);
curl_close($ch);

// Decode JSON response and output
$responseData = json_decode($response, true);
$joke = $responseData['choices'][0]['message']['content'] ?? 'No joke found';

echo $joke;
?>
