<footer class="app-footer" aria-label="Site footer">
	<div class="app-footer__inner">
		<div class="app-footer__brand">
			<h3>Training Task 3</h3>
			<p>Simple authentication UI template with login, signup, welcome, and logout pages.</p>
		</div>

		<div class="app-footer__sample" aria-label="Footer sample content">
			<div class="app-footer__info-block">
				<p class="app-footer__label">Office</p>
				<p>Colombo, Sri Lanka</p>
			</div>
			<div class="app-footer__info-block">
				<p class="app-footer__label">Support</p>
				<p>support@example.com</p>
				<p>+94 11 234 5678</p>
			</div>

		</div>

		<p class="app-footer__copy">&copy; <?php echo date('Y'); ?> Training Task 3. All rights reserved.</p>
	</div>
</footer>

<style>
	.app-footer {
		margin-top: 24px;
		background: #f8fbff;
		border-top: 1px solid #d8e2ef;
		color: #2c435c;
		font-family: "Space Grotesk", sans-serif;
	}

	.app-footer__inner {
		width: min(1040px, 92%);
		margin: 0 auto;
		padding: 20px 0;
		display: grid;
		gap: 14px;
		align-items: center;
	}

	.app-footer__brand h3 {
		margin: 0 0 6px;
		font-size: 1rem;
		font-family: "Sora", sans-serif;
	}

	.app-footer__brand p {
		margin: 0;
		color: #607a95;
		font-size: 0.92rem;
		line-height: 1.4;
	}

	.app-footer__sample {
		display: grid;
		gap: 10px;
	}

	.app-footer__info-block p {
		margin: 0;
		color: #607a95;
		font-size: 0.9rem;
		line-height: 1.45;
	}

	.app-footer__label {
		font-size: 0.78rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-weight: 700;
		color: #2d7ff9;
		margin-bottom: 2px;
	}

	.app-footer__copy {
		margin: 0;
		color: #607a95;
		font-size: 0.85rem;
	}

	@media (min-width: 860px) {
		.app-footer__inner {
			grid-template-columns: 1.2fr 1fr auto;
			gap: 20px;
		}

		.app-footer__sample {
			grid-template-columns: repeat(3, minmax(120px, 1fr));
			column-gap: 16px;
		}

		.app-footer__copy {
			text-align: right;
			white-space: nowrap;
		}
	}
</style>
