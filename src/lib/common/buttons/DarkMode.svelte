<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'svelte-heros-v2';
	import { isDarkTheme, toggleTheme, useCurrentTheme } from './darkMode';
	import IconButton from './IconButton.svelte';

	let usingDarkTheme = false;

	onMount(() => {
		useCurrentTheme();
		usingDarkTheme = isDarkTheme();
	});

	const handleToggleTheme = () => {
		toggleTheme();
		usingDarkTheme = isDarkTheme();
	};
</script>

<IconButton on:click={handleToggleTheme}>
	{#if usingDarkTheme}
		<Sun />
	{:else}
		<Moon />
	{/if}
</IconButton>
