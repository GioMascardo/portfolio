<script>
	import gio from '../../assets/gio-mascardo.jpg';
</script>

<section id="about">
	<div class="img-container">
		<img src={gio} alt="Gio" />
		<h3>Gio Mascardo</h3>
	</div>
	<div class="content-container u-grid">
		<div class="headings">
			<h6>freelance</h6>
			<h2>designer <small>& </small><br />developer</h2>
		</div>
		<p>
			I help early-stage startups build a <span class="highlight">digital marketing machine</span> by
			designing, developing, and optimizing their website so that they can spend more time providing
			their awesome products/services and less time on menial tasks that can be automated.
		</p>
	</div>
</section>

<style>
	.img-container {
		padding-inline: 0;
		position: relative;
	}

	.img-container > img {
		grid-row: 1 / -1;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		object-position: center top;
		height: auto;
	}

	.img-container > h3 {
		position: absolute;
		font-size: theme('fontSize.fluid-lg');
		bottom: calc(theme('spacing.s') * -1);
		right: theme('spacing.s');
		padding-block: theme('spacing.2xs');
		padding-inline: theme('spacing.2xs');
		background-color: theme('backgroundColor.yellow.400');
		color: theme('textColor.slate.700');
	}

	.content-container {
		padding-block: theme('spacing.2xl');
	}

	.headings {
		display: flex;
		flex-direction: column;
		gap: theme('spacing.3xs');
		color: theme('textColor.sky.700');
		grid-row: 1 / 2;
		grid-column: 1 / span 9;
	}

	.headings > h2 {
		font-size: theme('fontSize.fluid-3xl');
		text-transform: uppercase;
		line-height: 0.9;
	}

	.headings > h2 > small {
		font-size: theme('fontSize.fluid-xl');
		display: inline;
	}

	.headings > h6 {
		font-size: theme('fontSize.p');
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding-inline-start: 2px;
	}

	.content-container > p {
		grid-column: 3 / -1;
		grid-row: 2 / 3;
	}

	.content-container > p > span {
		color: theme('textColor.yellow.500');
	}

	@media (min-width: 64rem) {
		section {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: var(--grid-gutter);
			padding-inline: var(--grid-gutter);
		}

		.img-container {
			grid-column: 3 / span 4;
			align-items: center;
		}

		.img-container > img {
			grid-column: 1 / -1;
			aspect-ratio: revert;
		}

		.content-container {
			grid-column: 7 / span 5;
			justify-content: start;
			align-items: center;
			padding: 0;
			gap: theme('spacing.xs');
		}

		.headings {
			grid-column: 1 / -1;
			grid-row: 1 / 2;
			align-items: start;
			align-self: end;
		}

		.content-container > p {
			align-self: start;
		}
	}
</style>
