<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}

if (!isset($_SESSION['user_id'])) {
	header('Location: login.php');
	exit;
}

$displayName = $_SESSION['user_name'] ?? 'User';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Welcome | Training Task 3</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Sora:wght@500;700&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="assets/style.css" />
</head>
<body class="page-dashboard">
	<header class="navbar">
		<a href="welcome.php" class="brand">Training Task 3</a>
		<nav class="nav-links">
            <a href="welcome.php" class="nav-link">Welcome</a>
            <a href="register.php" class="nav-link">Signup</a>
			<a href="login.php" class="nav-link">Login</a>
			<a href="logout.php" class="nav-link is-active">Logout</a>
		</nav>
	</header>

	<main class="dashboard-grid">
		<section class="card card-highlight">
			<p class="eyebrow">Frontend sample</p>
			<h2>Hello, <?php echo htmlspecialchars($displayName); ?></h2>
			<p>This is your post-login frontend sample page. Replace this static text with session data from your backend.</p>
		</section>

		<section class="card">
			<h3>Account Status</h3>
			<p>Active</p>
		</section>

		<section class="card">
			<h3>Last Login</h3>
			<p>2026-04-20 10:30 AM</p>
		</section>

		<section class="card">
			<h3>Quick Links</h3>
			<div class="button-row">
				<a href="login.php" class="btn btn-secondary">Login Page</a>
				<a href="register.php" class="btn btn-secondary">Register Page</a>
			</div>
		</section>
	</main>
</body>
</html>

<?php
include 'footer.php';
?>