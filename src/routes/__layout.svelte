<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: calc(100vh - var(--footer-height) - 3rem - 3rem);
		width: 90%;
		margin: 0 auto;
	}
</style>
