<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import { keywords } from '$lib/metadata';
	import '../app.postcss';
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<main class="h-full flex flex-col">
	<Header />

	<div class="flex-1">
		<slot />
	</div>

	<Footer />
</main>
