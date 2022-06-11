<script lang="ts">
	import Card from './Card.svelte';

	import NewPageLink from './NewPageLink.svelte';
	import type { TalkType } from './types';

	export let talk: TalkType | null = null;
</script>

{#if talk}
	<Card>
		<h3><NewPageLink href={talk.url}>{talk.title}</NewPageLink></h3>
		<div>{talk.speaker}</div>
		<div class="categories">
			{#each talk.category as category}
				<span class="category">{category}</span>
			{/each}
		</div>
		<div class="summary">{talk.summary}</div>
	</Card>
{/if}

<style>
	h3 {
		margin: 0 0 0.25rem;
	}

	.categories {
		margin: 0.5rem 0;
	}

	.category {
		background-color: var(--p);
		color: var(--pt);
		font-size: 0.75rem;
		border-radius: 0.75em;
		padding: 0.3em;
		margin-right: 0.25rem;
	}

	.summary {
		white-space: pre-line;
	}
</style>
