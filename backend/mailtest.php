<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host        = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth    = true;
    $mail->Username    = '3fe73c22268cd6';  
    $mail->Password    = '****9c84';   
    $mail->SMTPSecure  = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port        = 587;

    // Disable SSL verification for localhost
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ],
    ];

    $mail->setFrom('hello@luminalsystems.com', 'Luminal Systems');
    $mail->addAddress('hello@luminalsystems.com', 'Luminal Team');
    $mail->Subject = 'Test Email from Luminal';
    $mail->isHTML(true);
    $mail->Body    = '<h1>Test email works!</h1>';

    $mail->send();
    echo 'SUCCESS! Check your Mailtrap inbox now.';

} catch (Exception $e) {
    echo 'FAILED: ' . $mail->ErrorInfo;
}
?>