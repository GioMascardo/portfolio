<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<Navbar />
<slot />
<Footer />
<SvelteToast />

<style></style>
