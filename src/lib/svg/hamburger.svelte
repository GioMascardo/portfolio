<script>
	import { quintInOut } from 'svelte/easing';
	import { draw } from 'svelte/transition';
</script>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M3.3457 12H21.3457M3.3457 6H21.3457M9.3457 18H21.3457"
		stroke="#334155"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		in:draw={{ duration: 300, easing: quintInOut }}
	/>
</svg>

<style>
	svg {
		height: theme('height.m');
		width: theme('height.m');
	}
</style>
