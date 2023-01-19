<script lang="ts">
	import Tag from '$lib/common/tags/Tag.svelte';
	import ArticleTitle from '$lib/PostTitle.svelte';
	import type { PageData } from './$types';
	import ArticleTags from '$lib/PostTags.svelte';

	export let data: PageData;
	$: ({ posts } = data);
</script>

<div class="grid grid-cols-2 gap-2">
	{#each posts as post (post.slug)}
		<article
			class="flex flex-col gap-2 items-start border-surface-d dark:border-surface-dark-l border-none rounded-lg p-4"
		>
			<ArticleTitle justify="left">
				<h2 slot="title" class="text-xl">
					<a href="blog/{post.slug}">
						{post.title}
					</a>
				</h2>
				<div slot="date" class="flex">
					{#if post.author}
						<div>{post.author}</div>
						<div class="mx-2">&#8226</div>
					{/if}
					{post.dateString}
				</div>
				<div slot="read-time">{post.readingTime.text}</div>
				<p slot="description">{post.description}</p>
			</ArticleTitle>

			<ArticleTags {post} className="justify-start" />
		</article>
	{/each}
</div>
