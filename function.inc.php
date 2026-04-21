<?php

function signupMessage($key)
{$messages = [
        'empty_input' => 'Please fill all fields.',
        'invalid_email' => 'Invalid email format.',
        'password_mismatch' => 'Passwords do not match.',
        'user_exists' => 'Username or email already exists.',
        'register_failed' => 'Registration failed.',
        'register_success' => 'User registered successfully.'];

    return $messages[$key] ?? '';}

function emptyInputSignup($name, $email, $username, $pwd, $pwdRepeat)
{return empty($name) || empty($email) || empty($username) || empty($pwd) || empty($pwdRepeat);}

function invalidEmail($email)
{return !filter_var($email, FILTER_VALIDATE_EMAIL);}

function pwdMatch($pwd, $pwdRepeat)
{return $pwd !== $pwdRepeat;}

function uidExists($conn, $username, $email)
{
    $sql = "SELECT * FROM users WHERE usersUid = ? OR usersEmail = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        return false;
    }

    mysqli_stmt_bind_param($stmt, "ss", $username, $email);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        mysqli_stmt_close($stmt);
        return $row;
    }

    mysqli_stmt_close($stmt);
    return false;
}

function createUser($conn, $name, $email, $username, $pwd)
{
    $sql = "INSERT INTO users (usersName, usersEmail, usersUid, usersPwd) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        return false;
    }

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
    mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $username, $hashedPwd);
    $ok = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    return $ok;
}

function processSignup($conn, $name, $email, $username, $password, $confirmPassword)
{
    if (emptyInputSignup($name, $email, $username, $password, $confirmPassword)) {
        return [
            'error' => signupMessage('empty_input'),
            'success' => ''
        ];
    }

    if (invalidEmail($email)) {
        return [
            'error' => signupMessage('invalid_email'),
            'success' => ''
        ];
    }

    if (pwdMatch($password, $confirmPassword)) {
        return [
            'error' => signupMessage('password_mismatch'),
            'success' => ''
        ];
    }

    if (uidExists($conn, $username, $email) !== false) {
        return [
            'error' => signupMessage('user_exists'),
            'success' => ''
        ];
    }

    if (createUser($conn, $name, $email, $username, $password)) {
        return [
            'error' => '',
            'success' => signupMessage('register_success')
        ];
    }

    return [
        'error' => signupMessage('register_failed'),
        'success' => ''
    ];
}




function ensureSessionStarted()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function loginMessage($key)
{
    $messages = [
        'empty_input' => 'Please enter email/username and password.',
        'invalid_credentials' => 'Invalid login credentials.'
    ];

    return $messages[$key] ?? '';
}

function emptyInputLogin($emailOrUsername, $pwd)
{
    return empty($emailOrUsername) || empty($pwd);
}

function getUserByEmailOrUsername($conn, $emailOrUsername)
{
    $sql = "SELECT * FROM users WHERE usersEmail = ? OR usersUid = ? LIMIT 1";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        return false;
    }

    mysqli_stmt_bind_param($stmt, "ss", $emailOrUsername, $emailOrUsername);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($resultData);

    mysqli_stmt_close($stmt);

    return $row ?: false;
}

function processLogin($conn, $emailOrUsername, $pwd)
{
    if (emptyInputLogin($emailOrUsername, $pwd)) {
        return [
            'error' => loginMessage('empty_input'),
            'success' => ''
        ];
    }

    $user = getUserByEmailOrUsername($conn, $emailOrUsername);

    if ($user === false || !password_verify($pwd, $user['usersPwd'])) {
        return [
            'error' => loginMessage('invalid_credentials'),
            'success' => ''
        ];
    }

    ensureSessionStarted();
    session_regenerate_id(true);

    $_SESSION['user_id'] = $user['usersId'];
    $_SESSION['user_uid'] = $user['usersUid'];
    $_SESSION['user_name'] = $user['usersName'];
    $_SESSION['user_email'] = $user['usersEmail'];

    return [
        'error' => '',
        'success' => 'Login successful.'
    ];
}

function isUserLoggedIn()
{
    ensureSessionStarted();
    return isset($_SESSION['user_id']);
}

function requireLogin($redirectTo = 'login.php')
{
    if (!isUserLoggedIn()) {
        header('Location: ' . $redirectTo);
        exit;
    }
}

function logoutUser($redirectTo = 'login.php')
{
    ensureSessionStarted();

    $_SESSION = [];

    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
    }

    session_destroy();

    header('Location: ' . $redirectTo);
    exit;
}
