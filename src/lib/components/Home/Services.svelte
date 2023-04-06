<section id="services">
	<h2>My Services</h2>
	<div class="services u-grid">
		<div class="service">
			<h3>Digital marketing consulting</h3>
			<p>
				I focus on crafting growth marketing strategies customized to your business requirements. By
				examining your data and user behavior, I can pinpoint areas that need attention and develop
				a strategy that's based on solid data to help your business thrive.
			</p>
		</div>
		<div class="service">
			<h3>Web Design</h3>
			<p>
				Your website is often the first impression potential customers have of your business. That's
				why it's important to have a website that not only looks great but also functions
				flawlessly. As a web designer, I can craft a stunning website that's tailored to your brand
				and optimized for user experience.
			</p>
		</div>
		<div class="service">
			<h3>Web Development</h3>
			<p>
				I can create a website that's custom-made to fit your unique requirements. I make use of the
				newest web technologies and industry standards to make sure that your website is responsive,
				user-friendly, and search-engine-optimized. My priority is crafting clean and scalable code,
				ensuring that your website will be easy to maintain and able to keep up with your business'
				growth over time.
			</p>
		</div>
		<div class="service">
			<h3>Conversion-Rate Optimization</h3>
			<p>
				Are you getting traffic to your website but struggling to convert visitors into customers?
				Conversion-rate optimization is the key to unlocking your website's potential. I can analyze
				your website's performance, identify areas for improvement, and implement solutions that
				increase conversions and drive revenue.
			</p>
		</div>
	</div>
</section>

<style>
	section > * + * {
		margin-top: theme('spacing.lg');
	}

	h2 {
		margin-inline-start: var(--grid-gutter);
	}

	.services {
		border-block: 1px solid theme('colors.slate.300');
		padding-inline: 0;
		gap: 0;
	}

	.service {
		border: 1px solid theme('colors.slate.300');
		padding: 2rem;
	}

	.service > * + * {
		margin-top: 0.25rem;
	}

	.service:nth-child(odd) {
		grid-column: 1 / -3;
	}

	.service:nth-child(even) {
		grid-column: 3 / -1;
	}

	@media (min-width: 48rem) {
		.service:nth-child(odd) {
			grid-column: 1 / -5;
		}

		.service:nth-child(even) {
			grid-column: 5 / -1;
		}
	}

	@media (min-width: 64rem) {
		.services {
			display: flex;
			overflow-x: scroll;
			flex-wrap: nowrap;
		}

		.service {
			flex: 1 0 40vw;
			padding: 4.5rem;
		}

		.service > * + * {
			margin-top: 0.875rem;
		}
	}
</style>
