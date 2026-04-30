<?php
require __DIR__ . '/env.php';

$frontendOrigin = getenv('FRONTEND_ORIGIN') ?: 'http://localhost:5173';
header("Access-Control-Allow-Origin: $frontendOrigin");
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
$merchantId     = getenv('PAYHERE_MERCHANT_ID') ?: '';
$merchantSecret = getenv('PAYHERE_MERCHANT_SECRET') ?: '';

if (!$merchantId || !$merchantSecret) {
    echo json_encode(['success' => false, 'message' => 'Missing PayHere credentials.']);
    exit();
}

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