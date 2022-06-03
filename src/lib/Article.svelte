<script lang="ts">
	export let href: string;
	export let title: string;
	export let subtitle: string = '';
</script>

<article>
	<h1><a {href}>{title}</a></h1>
	{#if subtitle}
		<div><small>{subtitle}</small></div>
	{/if}

	<p><slot /></p>
</article>

<style>
    article {
        margin-bottom: 4rem;
    }

	a {
		color: var(--st);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
