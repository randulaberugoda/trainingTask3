<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// ── Your PayHere Sandbox Credentials ──
$merchantId     = '1235468';     
$merchantSecret = 'MzMxNTk5Nzc4MDMxMjI5MDAzNjkzNjMyNjk2NjYxNjM2Mzk0NDY4'; 

// ── Get data from React ──
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$orderId  = $data['orderId']  ?? '';
$amount   = $data['amount']   ?? '';
$currency = 'USD';

// ── Generate Hash ──
// Hash formula: MD5(merchant_id + order_id + amount + currency + MD5(secret))
$hashedSecret = strtoupper(md5($merchantSecret));
$hash = strtoupper(
    md5($merchantId . $orderId . number_format($amount, 2, '.', '') . $currency . $hashedSecret)
);

echo json_encode([
    'success'    => true,
    'hash'       => $hash,
    'merchantId' => $merchantId,
    'orderId'    => $orderId,
    'amount'     => number_format($amount, 2, '.', ''),
    'currency'   => $currency,
]);
?>