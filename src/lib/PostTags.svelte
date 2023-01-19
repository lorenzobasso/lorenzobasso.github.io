<script lang="ts">
	import Stack from './common/layout/Stack.svelte';
	import Tag from './common/tags/Tag.svelte';
	import type { RenderedPost } from './posts';

	export let post: RenderedPost;
	export let className = 'justify-center';
</script>

<Stack gap={1} wrap {className}>
	{#each post.tags as tag}
		<Tag {tag} />
	{/each}
</Stack>
