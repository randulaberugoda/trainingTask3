<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/function.inc.php';

$errorMessage = '';
$successMessage = '';

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["submit"])) {
	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$username = trim($_POST["username"]);
	$password = $_POST["password"];
	$confirmPassword = $_POST["confirm_password"];

	$result = processSignup($conn, $name, $email, $username, $password, $confirmPassword);
	$errorMessage = $result['error'];
	$successMessage = $result['success'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Register | Training Task 3</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Sora:wght@500;700&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="assets/style.css" />
</head>
<body class="page-auth page-register">
	<header class="navbar">
		<a href="welcome.php" class="brand">Training Task 3</a>
		<nav class="nav-links">
            <a href="welcome.php" class="nav-link">Welcome</a>
			<a href="register.php" class="nav-link is-active">Signup</a>
			<a href="login.php" class="nav-link">Login</a>
			<a href="logout.php" class="nav-link">Logout</a>
		</nav>
	</header>

	<main class="layout">
		<section class="panel form-panel">
			<p class="eyebrow">Frontend sample</p>
			<h1>Create account</h1>
			<p class="lead">Use this registration form layout and connect it with your backend logic.</p>

			<?php if ($errorMessage !== ''): ?>
				<p style="margin-top: 10px; color: #c62828; font-weight: 500;"><?php echo htmlspecialchars($errorMessage); ?></p>
			<?php endif; ?>
			<?php if ($successMessage !== ''): ?>
				<p style="margin-top: 10px; color: #2e7d32; font-weight: 500;"><?php echo htmlspecialchars($successMessage); ?></p>
			<?php endif; ?>

			<form action="#" method="post" class="auth-form">
				<label for="name">Full name</label>
				<input id="name" name="name" type="text" placeholder="Randula Berugoda" required />

				<label for="reg-email">Email</label>
				<input id="reg-email" name="email" type="email" placeholder="you@example.com" required />

                <label for="reg-username">Username</label>
				<input id="reg-username" name="username" type="text" placeholder="randula123" required />

				<label for="reg-password">Password</label>
				<input id="reg-password" name="password" type="password" placeholder="Create a password" required />

				<label for="confirm-password">Confirm password</label>
				<input id="confirm-password" name="confirm_password" type="password" placeholder="Repeat password" required />

				<button type="submit" name="submit" class="btn btn-primary">Register</button>
			</form>

			<p class="meta-text">Already have an account? <a href="login.php">Login now</a></p>
		</section>




		<section class="panel art-panel">
			<h2>Simple Signup UI</h2>
			<p>After completing the form, this page can validate fields and create new user accounts.</p>
			<ul>
				<li>Common design language</li>
				<li>Minimal and readable layout</li>
			</ul>
		</section>
	</main>
</body>
</html>

