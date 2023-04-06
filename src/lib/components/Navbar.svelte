<script>
	import Hamburger from '$lib/svg/hamburger.svelte';
	import Close from '$lib/svg/close.svelte';
	import Logo from '$lib/svg/short-wordmark.svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="u-container">
	<Logo />

	<button on:click={toggleMenu}>
		<Hamburger />
	</button>

	{#if menuOpen}
		<aside transition:fly={{ duration: 300, easing: quintInOut, x: '50vw' }}>
			<nav>
				<button on:click={toggleMenu}>
					<Close />
				</button>
				<ul>
					<li><a href="/" on:click={toggleMenu}>Home</a></li>
					<li><a href="#about" on:click={toggleMenu}>About Me</a></li>
					<li><a href="#services" on:click={toggleMenu}>Services</a></li>
					<li><a href="#process" on:click={toggleMenu}>Process</a></li>
					<li><a href="#cta" on:click={toggleMenu}>Contact Me</a></li>
				</ul>
			</nav>
		</aside>
	{/if}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: theme('spacing.m');
		position: fixed;
		left: 0;
		right: 0;
		background-color: theme('backgroundColor.slate.50');
		z-index: 998;
	}

	aside {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 80vw;
		background-color: theme('backgroundColor.slate.100');
		padding-block: theme('spacing.3xl');
		z-index: 999;
		text-align: right;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: theme('spacing.s');
		align-items: flex-end;
	}

	li {
		list-style: none;
		display: inline-block;
		width: 100%;
	}

	a {
		text-decoration: none;
		color: theme('textColor.sky.700');
		font-size: theme('fontSize.lg');
		font-weight: theme('fontWeight.bold');
		text-transform: uppercase;
		height: 100%;
		width: 100%;
		padding-block: theme('spacing.m');
		padding-inline: theme('spacing.lg');
		display: inline-block;
	}
</style>
