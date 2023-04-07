<script>
	import CodeSnippet_02 from '$lib/svg/code-snippet-02.svelte';
	import InfoOctagon from '$lib/svg/info-octagon.svelte';
	import PencilLine from '$lib/svg/pencil-line.svelte';
	import Rocket_02 from '$lib/svg/rocket-02.svelte';
</script>

<section id="process" class="u-grid">
	<header>
		<h2>My Process</h2>
		<!-- <a href="/">See My Full Process</a> -->
	</header>

	<div class="process">
		<div class="step">
			<div class="title">
				<InfoOctagon />
				<h3>Strategy</h3>
			</div>
			<p>
				To kick off any project, I always invest time in understanding your business objectives and
				target audience. Through research, I determine the optimal approach for designing and
				developing your website. This involves gaining insight into your brand identity, competitive
				landscape, and user behaviors. By prioritizing strategy from the get-go, we can create a
				website tailored to achieve your specific objectives.
			</p>
			<span class="step-count">1</span>
		</div>
		<div class="step">
			<div class="title">
				<PencilLine />
				<h3>Design</h3>
			</div>
			<p>
				Once I have a clear understanding of your goals and audience, I move on to the design phase.
				This is where I start to bring your website to life. I use my design skills and creativity
				to create a visual representation of your brand online. This includes selecting the right
				colors, typography, and imagery to create a website that is visually appealing and
				user-friendly.
			</p>
			<span class="step-count">2</span>
		</div>
		<div class="step">
			<div class="title">
				<CodeSnippet_02 />
				<h3>Develop</h3>
			</div>
			<p>
				After the design is finalized, I start to build your website using the latest web
				development technologies. This includes creating a responsive design that looks great on
				desktop and mobile devices, optimizing for speed and performance, and integrating any
				necessary third-party tools. Throughout the development process, I'll keep you updated on
				progress and answer any questions you have.
			</p>
			<span class="step-count">3</span>
		</div>
		<div class="step">
			<div class="title">
				<Rocket_02 />
				<h3>Launch</h3>
			</div>
			<p>
				Once development is complete and you're happy with the final product, it's time to launch
				your website. I'll ensure that everything is set up correctly, including hosting, domain
				registration, and SSL certificates. Then, I'll make your website live for the world to see.
			</p>
			<span class="step-count">4</span>
		</div>
	</div>
</section>

<style>
	#process {
		row-gap: theme('spacing.lg');
	}

	header {
		grid-row: span 1;
		grid-column: 1 / -1;
	}

	.process {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 1fr;
		gap: theme('spacing.lg');
	}

	.step {
		padding: theme('spacing.m');
		border-radius: theme('spacing.2xs');
		display: flex;
		flex-direction: column;
		gap: theme('spacing.s');
	}

	.step p {
		max-width: 60ch;
	}

	.step:nth-child(odd) {
		background-color: theme('backgroundColor.sky.700');
		color: theme('textColor.slate.100');
	}

	.step:nth-child(even) {
		background-color: theme('backgroundColor.slate.200');
		/* color: theme('textColor.slate.500'); */
	}

	.step:nth-child(odd) .title,
	.step:nth-child(odd) .title > * {
		color: theme('textColor.slate.100');
	}

	.step:nth-child(even) .title,
	.step:nth-child(even) .title > * {
		color: theme('textColor.sky.700');
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: theme('spacing.2xs');
	}

	.step {
		position: relative;
	}

	.step-count {
		background-color: theme('backgroundColor.yellow.400');
		color: theme('textColor.sky.700');
		position: absolute;
		top: calc(theme('spacing.2xs') * -1);
		right: calc(theme('spacing.2xs') * -1);
		padding-block: theme('spacing.3xs');
		padding-inline: theme('spacing.2xs');
		border-radius: 0.25rem;
		font-size: theme('fontSize.fluid-m');
	}

	@media (min-width: 40rem) {
		.process {
			grid-column: 3 / -3;
		}
	}

	@media (min-width: 64rem) {
		#process {
			padding-inline: 0;
		}

		header {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: var(--grid-gutter);
			padding-inline: var(--grid-gutter);
		}

		header h2 {
			grid-column: 1 / -1;
		}

		.process {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: var(--grid-gutter);
			padding-inline: var(--grid-gutter);
		}

		.step {
			grid-column-end: span 5;
		}

		.step:nth-child(1) {
			grid-column-start: 2;
			grid-row: 1 / 2;
		}

		.step:nth-child(3) {
			grid-column-start: 3;
			grid-row: 2 / 3;
		}

		.step-count {
			font-size: theme('fontSize.fluid-lg');
			top: calc(theme('spacing.s') * -1);
			right: calc(theme('spacing.s') * -1);
		}
	}
</style>
