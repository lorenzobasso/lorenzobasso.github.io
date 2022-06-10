<script lang="ts">
	import talks from '../../data/talks.json';
	import { CanGroupBy, type TalkType } from '$lib/types';
	import Talk from '$lib/Talk.svelte';

	let groupBy = CanGroupBy.speaker;

	$: headers = [...new Set(talks.map((t: TalkType) => t[groupBy]))];
	$: groups = headers.map((h) => talks.filter((t) => t[groupBy] === h));
</script>

<article>
	<h1>Awesome talks</h1>
	{#each groups as group}
		<h2>By {group[0][groupBy]}</h2>
		<ul>
			{#each group as talk}
				<Talk {talk} />
			{/each}
		</ul>
	{/each}
</article>

<style>
	h1 {
		text-align: center;
	}

	h2 {
		font-size: 1.25rem;
		text-transform: capitalize;
		margin-top: 2rem;
	}
</style>
