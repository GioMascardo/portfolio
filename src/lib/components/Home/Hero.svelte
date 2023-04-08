<section id="hero">
	<h1>High-Performing Marketing Websites</h1>
	<div class="sub-headline">
		<p>
			Hi, I’m <span>Gio Mascardo</span> — A freelance web designer and developer. I build conversion-focused,
			custom-designed, and technologically-optimized websites.
		</p>
		<div class="button-group">
			<a href="#cta" class="primary">Let’s Talk</a>
			<a href="#about" class="secondary">Scroll Down</a>
		</div>
	</div>
</section>

<style>
	#hero {
		height: 100vh;
		display: grid;
		grid-template-rows: 1.75fr 1fr;
		grid-template-columns: repeat(12, 1fr);
		column-gap: var(--grid-gutter);
		row-gap: theme('spacing.xl');
		align-items: center;
		justify-content: center;
	}

	section > div {
		grid-column: 2 / -2;
		max-width: 100vw;
	}

	h1 {
		font-size: theme('fontSize.fluid-4xl');
		letter-spacing: -0.025em;
		line-height: 0.9;
		text-align: center;
		text-transform: uppercase;
		color: theme('textColor.sky.700');
		grid-row: 1 / 2;
		grid-column: 1 / -1;
		align-self: end;
	}

	.sub-headline {
		grid-row: 2 / 3;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		gap: theme('spacing.m-lg');
		align-items: center;
		justify-content: center;
		align-self: start;
	}

	p {
		text-align: center;
		justify-self: center;
	}

	p > span {
		font-weight: 500;
	}

	.button-group {
		margin-inline: auto;
	}

	a {
		font-size: theme('fontSize.p');
		padding: 1em 2em;
		border-radius: theme('spacing.2xs');
		transition-property: color, background-color, transform;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		display: inline-block;
	}

	a:hover {
		transform: translateY(-0.25rem);
	}

	.primary {
		background-color: theme('backgroundColor.yellow.400');
		color: theme('textColor.sky.700');
	}

	.secondary {
		color: theme('textColor.yellow.400');
		border: 1px solid theme('textColor.yellow.400');
	}

	.secondary:hover {
		background-color: theme('backgroundColor.yellow.400');
		color: theme('textColor.sky.700');
	}
</style>
