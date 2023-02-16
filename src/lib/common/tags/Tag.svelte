<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { formatTagForUrl, getAllActiveTags, isTagActive } from './tag';

	export let tag: string;

	let searchParams: URLSearchParams | undefined = undefined;

	$: encodedTag = formatTagForUrl(tag);
	$: selectedTags = getAllActiveTags(searchParams);
	$: active = isTagActive(tag, searchParams);

	onMount(() => (searchParams = new URLSearchParams(window.location.search)));

	const handleClick = () => {
		if (searchParams) {
			const newTags = active
				? selectedTags.filter(t => t !== encodedTag)
				: [...selectedTags, encodedTag];

			if (newTags.length) {
				searchParams.set('tag', newTags.join(','));
			} else {
				searchParams.delete('tag');
			}

			goto(`/blog?${searchParams.toString()}`);
		}
	};
</script>

<button
	on:click={handleClick}
	class="p-1 px-3 bg-surface-d dark:bg-surface-dark-l text-primary-dark dark:text-primary text-sm rounded-lg"
	class:active
>
	{tag}
</button>

<style>
	.active {
		@apply border-2 border-primary-dark dark:border-primary;
	}
</style>
