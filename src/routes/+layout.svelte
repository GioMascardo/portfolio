<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<svelte:head>
	<title>Gio Mascardo | Freelance Web Developer</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
<SvelteToast />

<style></style>
