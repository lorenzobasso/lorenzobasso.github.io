<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$lib/errors/NotFound.svelte';
</script>

<article class="text-center">
	{#if $page.status === 404}
		<NotFound />
	{:else}
		<h1>It's really not you, it's me</h1>
		<div>{$page.status}</div>
		<div>{$page.error?.message}</div>
	{/if}
</article>
