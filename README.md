# Luminal Systems

A small React + Vite frontend with a PHP backend for PayHere payments and contact email delivery.

## Run Locally
1) Install frontend dependencies:
	- `npm install`
2) Create the frontend env file:
	- Copy `.env.example` to `.env` and fill the values.
3) Set up the PHP backend:
	- Copy `backend/.env.example` to `backend/.env` and fill the values.
	- Make sure your PHP server (XAMPP, etc.) can serve the `backend/` folder.
4) Start the frontend dev server:
	- `npm run dev`

Frontend runs at `http://localhost:5173` by default.

## Environment Files
- `.env` is for the React/Vite app.
- `backend/.env` is for PHP (PayHere credentials + SMTP settings).

Do not commit real secrets. Keep both `.env` files private.

## Database
This project does not use a database right now. No database setup is required.

If you add one later, document the connection string and migration steps here.
