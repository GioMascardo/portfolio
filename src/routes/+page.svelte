<script lang="ts">
	import Hero from '$lib/components/Home/Hero.svelte';
	import About from '$lib/components/Home/About.svelte';
	import Services from '$lib/components/Home/Services.svelte';
	import Process from '$lib/components/Home/Process.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { toast } from '@zerodevx/svelte-toast';
</script>

<Hero />
<About />
<Services />
<Process />

<section id="cta" class="u-grid">
	<div class="wrapper">
		<h2>Have a project?<br />Let's Get Started</h2>
		<form
			method="POST"
			use:enhance={() => {
				return async ({ result, update }) => {
					console.log(result);
					if (result.type === 'error') {
						toast.push('Message sent successfully!', {
							theme: {
								'--toastColor': '#fef2f2',
								'--toastBackground': '#ef4444',
								'--toastBarBackground': '#fef2f2'
							}
						});
						await applyAction(result);
					} else {
						toast.push('Message sent successfully!', {
							theme: {
								'--toastColor': '#ecfdf5',
								'--toastBackground': '#10b981',
								'--toastBarBackground': '#ecfdf5'
							}
						});
						update();
					}
				};
			}}
		>
			<label for="name"> Name: </label>
			<input type="text" name="name" id="name" placeholder="John Doe" required />

			<label for="email"> Email: </label>
			<input type="email" name="email" id="email" placeholder="your@email.com" required />

			<label for="message"> Message: </label>
			<textarea
				name="message"
				id="message"
				cols="30"
				rows="10"
				placeholder="Write your message here."
				required
			/>
			<button>Send</button>
		</form>
	</div>
</section>

<style>
	.wrapper {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: theme('spacing.m');
		background-color: theme('backgroundColor.sky.700');
		padding-block: theme('spacing.lg');
		padding-inline: theme('spacing.s-lg');
		border-radius: theme('spacing.s');
	}

	h2 {
		color: theme('textColor.slate.100');
		text-align: center;
		line-height: 1.1;
		text-transform: uppercase;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: theme('spacing.2xs');
		width: 100%;
	}

	label {
		color: theme('textColor.slate.100');
	}

	input + label {
		margin-top: theme('spacing.s');
	}

	input,
	textarea {
		padding: theme('spacing.xs');
		border: none;
		border-radius: 0.25rem;
		outline: none;
	}

	input:focus-visible,
	textarea:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px theme('backgroundColor.sky.100');
	}

	input::placeholder,
	textarea::placeholder {
		color: theme('textColor.slate.300');
	}

	button {
		background-color: theme('backgroundColor.yellow.400');
		color: theme('textColor.sky.700');
		font-weight: 700;
		text-transform: capitalize;
		padding: 1em 4em;
		border: none;
		border-radius: 0.25rem;
		outline: none;
		cursor: pointer;
		margin-top: theme('spacing.m');
		max-width: 30rem;
		align-self: center;
		transition: transform 0.3s ease-in-out;
	}

	button:hover {
		transform: translateY(-0.25rem);
	}

	@media (min-width: 64rem) {
		.wrapper {
			grid-column: 2 / -2;
			padding-block: theme('spacing.xl');
			padding-inline: theme('spacing.lg');
		}
	}
</style>
