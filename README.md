# Training Task 3

## Project Overview

Training Task 3 is a beginner friendly PHP + MySQL authentication / login/ logout project.
It includes:

- User registration with password hashing 
- User login input validation and password verify
- Session based welcome page protection
- Logout that destroys the session and redirects to login


The project uses:

- PHP 
- MySQL 
- HTML/CSS frontend

## Project Structure

- `register.php` - Signup form and registration logic call
- `login.php` - Login form and login handling
- `welcome.php` - Protected pagen from sessions
- `logout.php` - Session destroy + redirect to login
- `function.inc.php` - Reusable helper , authentication and msges functions
- `config.php` - Database connection
- `assets/style.css` - Styling

## Setup and Run

### 1. Prerequisites

- XAMPP installed (Apache and MySQL)
- Web browser

### 2. Place Project in htdocs

Copy folder to:

`C:/xampp/htdocs`

### 3. Start Services

Open XAMPP Control Panel and start:

- Apache
- MySQL

### 4. Create Database

Open phpMyAdmin and create a database named:

`phpproject01`

### 5. Create users Table

Run SQL in phpMyAdmin or import table

```sql
CREATE TABLE users (
	usersId INT AUTO_INCREMENT PRIMARY KEY,
	usersName VARCHAR(128) NOT NULL,
	usersEmail VARCHAR(128) NOT NULL UNIQUE,
	usersUid VARCHAR(128) NOT NULL UNIQUE,
	usersPwd VARCHAR(255) NOT NULL
);
```

### 6. Run the Project

Open in browser:

`http://localhost/TraningTask3/register.php`

 Then:

1. Register a new user
2. Login with email and + password
3. Access the protected welcome page
4. Logout to clear session and redirect

## Tutorial Used

YouTube tutorial:

https://www.youtube.com/watch?v=gCo6JqGMi30