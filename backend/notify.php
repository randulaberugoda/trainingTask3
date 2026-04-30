<?php
// PayHere will call this URL after payment
// For sandbox testing just log the notification

require __DIR__ . '/env.php';

$merchantId     = getenv('PAYHERE_MERCHANT_ID') ?: '';
$merchantSecret = getenv('PAYHERE_MERCHANT_SECRET') ?: '';

if (!$merchantId || !$merchantSecret) {
    http_response_code(500);
    exit();
}

$orderId       = $_POST['order_id']       ?? '';
$payhereAmount = $_POST['payhere_amount'] ?? '';
$payhereCurrency = $_POST['payhere_currency'] ?? '';
$statusCode    = $_POST['status_code']    ?? '';
$md5sig        = $_POST['md5sig']         ?? '';

// Verify hash
$hashedSecret = strtoupper(md5($merchantSecret));
$localMd5sig  = strtoupper(
    md5($merchantId . $orderId . $payhereAmount . $payhereCurrency . $statusCode . $hashedSecret)
);

if ($localMd5sig === $md5sig && $statusCode == 2) {
    // Payment successful — log it
    file_put_contents(
        __DIR__ . '/payments.log',
        date('Y-m-d H:i:s') . " | Order: $orderId | Amount: $payhereAmount $payhereCurrency | SUCCESS\n",
        FILE_APPEND
    );
}

http_response_code(200);
?>