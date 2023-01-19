<script lang="ts">
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import { keywords } from '$lib/metadata';
	import '../app.postcss';
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<main class="h-full flex flex-col text-surface-on dark:text-surface-dark-on">
	<Header />

	<div class="flex-1 w-full max-w-3xl mx-auto">
		<slot />
	</div>

	<Footer />
</main>
