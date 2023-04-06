<script>
	import { quintInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="w-6 h-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M6 18L18 6M6 6l12 12"
		in:draw={{ duration: 300, easing: quintInOut }}
	/>
</svg>

<style>
	svg {
		height: theme('height.m');
		width: theme('height.m');
		position: absolute;
		top: theme('spacing.m');
		right: var(--grid-gutter);
	}
</style>
