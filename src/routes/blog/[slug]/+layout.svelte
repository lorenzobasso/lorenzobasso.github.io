<script lang="ts">
	import ArticleTags from '$lib/PostTags.svelte';
	import ArticleTitle from '$lib/PostTitle.svelte';
	import Stack from '$lib/common/layout/Stack.svelte';
	import type { LayoutServerData } from './$types';
	import './article.scss';

	export let data: LayoutServerData;
	$: ({ post } = data);
</script>

<Stack gap={4} col className="mt-4 mb-8">
	<ArticleTitle justify="center">
		<h1 slot="title" class="text-3xl w-11/12 text-center">{post.title}</h1>
		<div slot="date">
			{#if post.author}
				{post.author}
				<span class="mx-1 leading-none">&#8226</span>
			{/if}
			{post.dateString}
		</div>
		<div slot="read-time">{post.readingTime.text}</div>
	</ArticleTitle>

	<article id="markdown-content">
		<slot />
	</article>

	<ArticleTags {post} />
</Stack>
