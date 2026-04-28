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

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if (!$name || !$email || !$subject || !$message) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit();
}

$mail = new PHPMailer(true);

try {
    // ── Mailtrap SMTP Settings ──────────────────────
    $mail->isSMTP();
    $mail->Host       = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth   = true;
    $mail->Username   = '3fe73c22268cd6'; 
    $mail->Password   = '****9c84';  
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 2525;

    // ── Email Details ───────────────────────────────
    $mail->setFrom('hello@luminalsystems.com', 'Luminal Systems');
    $mail->addAddress('hello@luminalsystems.com', 'Luminal Team');
    $mail->addReplyTo($email, $name);

    $mail->Subject = "New Contact Form: $subject";
    $mail->isHTML(true);
    $mail->Body = "
        <div style='font-family: Arial, sans-serif; max-width: 600px;'>
            <h2 style='color:#4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;'>
                New Message — Luminal Contact Form
            </h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong></p>
            <div style='background:#f5f5f5; padding:15px; border-radius:8px;'>
                $message
            </div>
            <p style='color:#999; font-size:12px; margin-top:20px;'>
                Sent from Luminal Systems Contact Form
            </p>
        </div>
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Email failed: ' . $mail->ErrorInfo
    ]);
}
?>