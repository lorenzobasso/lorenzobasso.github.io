<script>
	export let from = '';
</script>

<blockquote>
	<slot />

	{#if from}
		<br />
		<br />
		<small>&mdash; {from} &mdash; </small>
	{/if}
</blockquote>

<style>
	blockquote {
		border-left: 4px solid var(--sl);
		font-style: italic;
		font-size: 1.1rem;
		padding: 0.5rem 1.5rem;
		margin: 0 1rem;
	}

	blockquote > small {
		font-style: normal;
		font-size: 0.8em;
	}
</style>
