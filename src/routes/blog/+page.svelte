<script lang="ts">
	import Tag from '$lib/common/tags/Tag.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<div class="grid grid-cols-1 gap-2">
	{#each posts as post (post.slug)}
		<article
			class="flex flex-col items-start border-surface-d dark:border-surface-dark-l border-none rounded-lg p-4"
		>
			<h2 class="text-xl">{post.title}</h2>
			<div class="flex items-center text-sm">
				<div>{post.author}</div>
				<div class="mx-1 text-xl leading-none">&#8226</div>
				<div>
					{post.dateString}
				</div>
			</div>
			<div class="text-sm">{post.readingTime.text}</div>
			{#if post.description}
				<p class="self-start my-2">{post.description}</p>
			{/if}
			<section class="flex gap-1">
				{#each post.tags.slice(0, 2) as tag}
					<Tag {tag} />
				{/each}
				{#if post.tags.length > 2}
					<div>&#8230</div>
				{/if}
			</section>
		</article>
	{/each}
</div>
