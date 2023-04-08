<script>
	import Hero from '$lib/components/Home/Hero.svelte';
	import About from '$lib/components/Home/About.svelte';
	import Services from '$lib/components/Home/Services.svelte';
	import Process from '$lib/components/Home/Process.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	const handleSubmit = async (/** @type {{ target: any; }} */ event) => {
		const form = event.target;
		const data = new FormData(form);
		console.dir(data);

		const response = await fetch('https://giomascardo.com/.netlify/functions/triggerFormSubmit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		});

		console.log(response.status, response.statusText);
		if (response.ok) {
			form.reset();
			toast.push('Message sent successfully!', {
				theme: {
					'--toastColor': '#f1f5f9',
					'--toastBackground': '#0369a1',
					'--toastBarBackground': '#f1f5f9'
				}
			});
			return {
				status: response.status,
				statusText: response.statusText,
				type: 'success'
			};
		} else {
			return {
				status: response.status,
				statusText: response.statusText,
				type: 'error'
			};
		}
	};
</script>

<Hero />
<About />
<Services />
<Process />

<section id="cta" class="u-grid">
	<div class="wrapper">
		<h2>Have a project?<br />Let's Get Started</h2>
		<form method="POST" on:submit|preventDefault={handleSubmit}>
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
