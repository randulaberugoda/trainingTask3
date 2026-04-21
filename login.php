<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/function.inc.php';

$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$emailOrUsername = trim($_POST['email'] ?? '');
	$password = $_POST['password'] ?? '';

	$result = processLogin($conn, $emailOrUsername, $password);
	$errorMessage = $result['error'];

	if ($result['success'] !== '') {
		header('Location: welcome.php');
		exit;
	}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Login | Training Task 3</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Sora:wght@500;700&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="assets/style.css" />
</head>
<body class="page-auth page-login">
	<header class="navbar">
		<a href="welcome.php" class="brand">Training Task 3</a>
		<nav class="nav-links">
            <a href="welcome.php" class="nav-link">Welcome</a>
            <a href="register.php" class="nav-link">Signup</a>
			<a href="login.php" class="nav-link">Login</a>
			<a href="logout.php" class="nav-link is-active">Logout</a>
		</nav>
	</header>

	<main class="layout">
		<section class="panel form-panel">
			<p class="eyebrow">Frontend sample</p>
			<h1>Welcome back</h1>
			<p class="lead">Sign in with your backend credentials when your logic is ready.</p>

			<?php if ($errorMessage !== ''): ?>
				<p style="margin-top: 10px; color: #c62828; font-weight: 500;"><?php echo htmlspecialchars($errorMessage); ?></p>
			<?php endif; ?>

			<form action="#" method="post" class="auth-form">
				<label for="login-email">Email</label>
				<input id="login-email" name="email" type="text" placeholder="you@example.com or username" required />

				<label for="login-password">Password</label>
				<input id="login-password" name="password" type="password" placeholder="Enter your password" required />

				<div class="inline-row">
					<label class="checkbox-wrap" for="remember">
						<input id="remember" name="remember" type="checkbox" />
						<span>Remember me</span>
					</label>
					<a href="#" class="small-link">Forgot password?</a>
				</div>

				<button type="submit" class="btn btn-primary">Login</button>
			</form>

			<p class="meta-text">No account yet? <a href="register.php">Create one</a></p>
		</section>

		<section class="panel art-panel">
			<h2>Simple Login UI</h2>
			<p>This page is frontend only. Connect your backend authentication in the form action and validation.</p>
			<ul>
				<li>Shared navbar across pages</li>
				<li>Light and clean design</li>
				<li>Responsive for mobile</li>
			</ul>
		</section>
	</main>
</body>
</html>
