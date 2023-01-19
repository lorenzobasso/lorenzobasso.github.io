<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { formatTagForUrl, getAllActiveTags, isTagActive } from './tag';

	export let tag: string;

	$: ({
		url: { searchParams }
	} = $page);
	$: encodedTag = formatTagForUrl(tag);
	$: selectedTags = getAllActiveTags(searchParams);
	$: active = isTagActive(tag, searchParams);

	const handleClick = () => {
		const query = new URLSearchParams(searchParams.toString());

		const newTags = active
			? selectedTags.filter(t => t !== encodedTag)
			: [...selectedTags, encodedTag];

		if (newTags.length) {
			query.set('tag', newTags.join(','));
		} else {
			query.delete('tag');
		}

		goto(`/blog?${query.toString()}`);
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
