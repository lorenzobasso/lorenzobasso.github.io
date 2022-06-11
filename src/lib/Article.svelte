<script lang="ts">
	import Card from './Card.svelte';

	export let href: string;
	export let title: string;
	export let subtitle: string = '';
</script>

<Card>
	<h1><a {href}>{title}</a></h1>
	{#if subtitle}
		<div><small>{subtitle}</small></div>
	{/if}

	<p><slot /></p>
</Card>

<style>
	a {
		color: var(--st);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
